import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Download, FileText, Send } from 'lucide-react';

const ResumeDownload: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [email, setEmail] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download
    setTimeout(() => {
      setIsDownloading(false);
      
      // Create download link and trigger it
      const link = document.createElement('a');
      link.href = '/assets/anirudh_resume.pdf';
      link.download = 'Anirudh_Vasudev_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setShowSuccess(true);
      
      // Hide success message after 2 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setIsOpen(false);
      }, 2000);
    }, 1500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    
    // Simulate sending email
    setTimeout(() => {
      setIsDownloading(false);
      setShowSuccess(true);
      setEmail('');
      
      // Hide success message after 2 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setShowEmailForm(false);
        setIsOpen(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="mt-8">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            className="group relative overflow-hidden bg-primary text-white hover:bg-primary/90 transition-all duration-300"
            size="lg"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-primary/80 transform translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative flex items-center gap-2 z-10">
              <FileText className="w-5 h-5" />
              Download Resume
            </span>
          </Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Download Resume</DialogTitle>
            <DialogDescription>
              {!showEmailForm && !showSuccess && "Get Anirudh's professional resume"}
              {showEmailForm && !showSuccess && "Enter your email to receive the resume"}
              {showSuccess && "Success!"}
            </DialogDescription>
          </DialogHeader>
          
          {!showEmailForm && !showSuccess && (
            <div className="flex flex-col items-center justify-center py-8 px-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Anirudh Vasudev - Resume</h3>
              <p className="text-sm text-gray-500 text-center mb-6">
                Download the complete professional resume with all experience, skills, and qualifications.
              </p>
            </div>
          )}
          
          {showEmailForm && !showSuccess && (
            <form onSubmit={handleSendEmail} className="py-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 border rounded-md"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <p className="text-sm text-gray-500">
                  Your resume will be sent to this email address.
                </p>
              </div>
            </form>
          )}
          
          {showSuccess && (
            <div className="py-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-green-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="mt-4 text-lg font-medium">
                {showEmailForm ? "Resume sent!" : "Resume downloaded!"}
              </p>
              <p className="text-gray-500">
                {showEmailForm ? "Check your inbox" : "Thanks for your interest"}
              </p>
            </div>
          )}
          
          {!showSuccess && (
            <DialogFooter className="flex sm:justify-between gap-4">
              {!showEmailForm && (
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setShowEmailForm(true)}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send to Email
                </Button>
              )}
              
              <Button 
                type="submit" 
                className="flex-1"
                onClick={showEmailForm ? handleSendEmail : handleDownload}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {showEmailForm ? "Sending..." : "Downloading..."}
                  </>
                ) : (
                  <>
                    {showEmailForm ? (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </>
                    )}
                  </>
                )}
              </Button>
              
              {showEmailForm && (
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setShowEmailForm(false)}
                >
                  Back
                </Button>
              )}
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResumeDownload;