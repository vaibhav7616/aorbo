import { GoogleGenAI } from "@google/genai";
import React, { useRef, useState } from 'react';
import { ArrowRightIcon, DocumentScannerIcon, ImageIcon, SpinnerIcon, UploadIcon } from './icons/Icons';
import PageHero from './PageHero';

// Helper function to convert a file to a base64 string
const fileToBase64 = (file: File): Promise<string> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const resultStr = reader.result as string;
        resolve(resultStr.split(',')[1]);
    };
    reader.onerror = error => reject(error);
});


const AIToolsPage: React.FC = () => {
    const [activeTool, setActiveTool] = useState<'generate' | 'analyze'>('generate');

    // State for Image Generation
    const [generatePrompt, setGeneratePrompt] = useState('A serene Himalayan campsite at sunrise, with a tent and snow-capped peaks in the background.');
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [generateError, setGenerateError] = useState<string | null>(null);

    // State for Image Analysis
    const [analyzePrompt, setAnalyzePrompt] = useState('Describe this trekking location. What season is it? What gear is visible?');
    const [analyzeImage, setAnalyzeImage] = useState<{ file: File, preview: string } | null>(null);
    const [analysisResult, setAnalysisResult] = useState<string | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analyzeError, setAnalyzeError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageGeneration = async () => {
        if (!generatePrompt || isGenerating) return;

        setIsGenerating(true);
        setGenerateError(null);
        setGeneratedImage(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const response = await ai.models.generateImages({
                model: 'imagen-4.0-generate-001',
                prompt: generatePrompt,
                config: {
                  numberOfImages: 1,
                  outputMimeType: 'image/jpeg',
                },
            });

            if (response.generatedImages && response.generatedImages.length > 0) {
                const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
                const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;
                setGeneratedImage(imageUrl);
            } else {
                throw new Error("Image generation failed to return an image.");
            }

        } catch (err) {
            console.error("Image generation failed:", err);
            setGenerateError("Sorry, we couldn't generate the image. The model may have refused the prompt. Please try a different description.");
        } finally {
            setIsGenerating(false);
        }
    };
    
    const handleImageAnalysis = async () => {
        if (!analyzeImage || !analyzePrompt || isAnalyzing) return;

        setIsAnalyzing(true);
        setAnalyzeError(null);
        setAnalysisResult(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const base64Data = await fileToBase64(analyzeImage.file);
            const imagePart = {
              inlineData: {
                mimeType: analyzeImage.file.type,
                data: base64Data,
              },
            };
            const textPart = { text: analyzePrompt };

            const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents: { parts: [imagePart, textPart] },
            });

            setAnalysisResult(response.text);

        } catch (err) {
            console.error("Image analysis failed:", err);
            setAnalyzeError("Sorry, we couldn't analyze the image. Please try again with a different image or prompt.");
        } finally {
            setIsAnalyzing(false);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAnalyzeImage({ file, preview: URL.createObjectURL(file) });
            setAnalysisResult(null);
            setAnalyzeError(null);
        }
    };

    const ToolTab: React.FC<{
        icon: React.ReactNode;
        title: string;
        tool: 'generate' | 'analyze';
    }> = ({ icon, title, tool }) => (
        <button
            onClick={() => setActiveTool(tool)}
            className={`w-full md:w-1/2 flex items-center justify-center gap-3 p-4 text-lg font-bold font-display border-b-4 transition-all duration-300 ${activeTool === tool ? 'text-brand-primary border-brand-primary' : 'text-gray-500 border-transparent hover:border-gray-300'}`}
        >
            {icon}
            {title}
        </button>
    );

    return (
        <div>
            <PageHero 
                title="AORBO AI Studio" 
                subtitle="Generate inspiration or analyze your gear. Your adventure, enhanced by AI."
                imageUrl="https://images.unsplash.com/photo-1593361688583-920c81324723?q=80&w=2070&auto=format&fit=crop"
            />
            <main className="bg-brand-light">
                <div className="container mx-auto px-6 py-16">
                    <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row border-b border-gray-200">
                           <ToolTab icon={<ImageIcon className="h-6 w-6" />} title="Generate Image" tool="generate" />
                           <ToolTab icon={<DocumentScannerIcon className="h-6 w-6" />} title="Analyze Image" tool="analyze" />
                        </div>
                        
                        <div className="p-8">
                            {/* Image Generation Tool */}
                            {activeTool === 'generate' && (
                                <div className="animate-fadeInUpFast">
                                    <h3 className="text-2xl font-bold text-brand-dark mb-4">Image Generator</h3>
                                    <p className="text-gray-600 mb-6">Describe a scene, a landscape, or a moment from a trek, and let our AI bring it to life. Perfect for visualizing your next adventure.</p>
                                    
                                    <textarea
                                        value={generatePrompt}
                                        onChange={(e) => setGeneratePrompt(e.target.value)}
                                        placeholder="e.g., A trekker standing on a cliff overlooking a misty valley during sunset"
                                        className="w-full p-3 text-md rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 h-28"
                                    />
                                    <button onClick={handleImageGeneration} disabled={isGenerating || !generatePrompt} className="mt-4 w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-3 disabled:bg-gray-400 disabled:cursor-not-allowed">
                                        {isGenerating ? <><SpinnerIcon className="h-6 w-6" /> Generating...</> : 'Generate Image'}
                                    </button>

                                    {generateError && <p className="mt-4 text-center text-red-600 bg-red-100 p-3 rounded-md">{generateError}</p>}
                                    
                                    <div className="mt-8">
                                        {isGenerating && (
                                            <div className="w-full aspect-square bg-gray-200 rounded-lg animate-pulse flex items-center justify-center text-gray-500">Generating your vision...</div>
                                        )}
                                        {generatedImage && (
                                            <div>
                                                <h4 className="font-bold text-lg mb-2">Result:</h4>
                                                <img src={generatedImage} alt="AI generated image" className="w-full rounded-lg shadow-md" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Image Analysis Tool */}
                            {activeTool === 'analyze' && (
                                <div className="animate-fadeInUpFast">
                                    <h3 className="text-2xl font-bold text-brand-dark mb-4">Image Analyzer</h3>
                                    <p className="text-gray-600 mb-6">Upload a photo from one of your treks and ask a question. Get insights on the location, identify gear, or learn about the flora and fauna.</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                        <div className="w-full aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-center p-4">
                                            {analyzeImage ? (
                                                <img src={analyzeImage.preview} alt="Upload preview" className="max-h-full max-w-full rounded" />
                                            ) : (
                                                <div className="text-gray-500">
                                                    <UploadIcon className="h-12 w-12 mx-auto mb-2" />
                                                    <p>Your image will appear here</p>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                                            <button onClick={() => fileInputRef.current?.click()} className="w-full mb-4 bg-white hover:bg-gray-100 text-brand-dark font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm border border-gray-200">
                                                <UploadIcon className="h-5 w-5" />
                                                {analyzeImage ? 'Change Image' : 'Upload Image'}
                                            </button>

                                            <label htmlFor="analyze_prompt" className="font-semibold text-gray-700 block mb-2">Your Question:</label>
                                             <textarea
                                                id="analyze_prompt"
                                                value={analyzePrompt}
                                                onChange={(e) => setAnalyzePrompt(e.target.value)}
                                                placeholder="e.g., What mountain is this?"
                                                className="w-full p-3 text-md rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 h-24"
                                            />
                                        </div>
                                    </div>
                                    
                                    <button onClick={handleImageAnalysis} disabled={isAnalyzing || !analyzeImage || !analyzePrompt} className="mt-6 w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-3 disabled:bg-gray-400 disabled:cursor-not-allowed">
                                         {isAnalyzing ? <><SpinnerIcon className="h-6 w-6" /> Analyzing...</> : <>Analyze Image <ArrowRightIcon className="h-5 w-5" /></>}
                                    </button>

                                    {analyzeError && <p className="mt-4 text-center text-red-600 bg-red-100 p-3 rounded-md">{analyzeError}</p>}

                                    <div className="mt-8">
                                        {isAnalyzing && (
                                            <div className="space-y-3">
                                                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                                                <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                                                <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                                            </div>
                                        )}
                                        {analysisResult && (
                                            <div>
                                                <h4 className="font-bold text-lg mb-2">Analysis Result:</h4>
                                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-gray-800 whitespace-pre-wrap leading-relaxed">
                                                    {analysisResult}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AIToolsPage;