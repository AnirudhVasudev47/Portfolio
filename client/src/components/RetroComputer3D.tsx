import React, { useEffect, useRef } from 'react';

const RetroComputer3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Animation variables
    let animationFrameId: number;
    let time = 0;
    
    // Setup canvas
    const setupCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    setupCanvas();
    window.addEventListener('resize', setupCanvas);
    
    // Colors
    const colors = {
      background: '#f8fafc',
      monitorFrame: '#4b5563',
      screen: '#1e293b',
      screenText: '#38bdf8',
      base: '#374151',
      keyboard: '#4b5563',
      keys: '#d1d5db',
      redLight: '#ef4444',
      greenLight: '#22c55e'
    };
    
    // Draw the retro computer
    const drawComputer = (time: number) => {
      if (!ctx) return;
      
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      
      // Clear canvas
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, width, height);
      
      // Calculate monitor size and position based on canvas dimensions
      const monitorWidth = Math.min(width * 0.8, 300);
      const monitorHeight = monitorWidth * 0.7;
      const monitorX = centerX - monitorWidth / 2;
      const monitorY = height * 0.2;
      
      // Monitor frame with 3D effect (top)
      ctx.fillStyle = colors.monitorFrame;
      ctx.beginPath();
      ctx.moveTo(monitorX, monitorY);
      ctx.lineTo(monitorX + monitorWidth, monitorY);
      ctx.lineTo(monitorX + monitorWidth - 10, monitorY + 10);
      ctx.lineTo(monitorX + 10, monitorY + 10);
      ctx.closePath();
      ctx.fill();
      
      // Monitor frame (main)
      ctx.fillStyle = colors.monitorFrame;
      ctx.fillRect(monitorX, monitorY, monitorWidth, monitorHeight);
      
      // Screen
      const screenPadding = 10;
      ctx.fillStyle = colors.screen;
      ctx.fillRect(
        monitorX + screenPadding,
        monitorY + screenPadding,
        monitorWidth - screenPadding * 2,
        monitorHeight - screenPadding * 2
      );
      
      // Draw screen content (code-like lines)
      ctx.fillStyle = colors.screenText;
      const lineHeight = 8;
      const lineSpacing = 6;
      const numLines = 7;
      
      for (let i = 0; i < numLines; i++) {
        const lineWidth = (Math.sin(time * 0.1 + i * 0.5) * 0.25 + 0.75) * (monitorWidth - screenPadding * 4);
        ctx.fillRect(
          monitorX + screenPadding * 2,
          monitorY + screenPadding * 2 + i * (lineHeight + lineSpacing),
          lineWidth,
          lineHeight
        );
      }
      
      // Monitor stand
      const standWidth = monitorWidth * 0.2;
      const standHeight = monitorHeight * 0.25;
      const standX = centerX - standWidth / 2;
      const standY = monitorY + monitorHeight;
      
      ctx.fillStyle = colors.monitorFrame;
      ctx.beginPath();
      ctx.moveTo(standX, standY);
      ctx.lineTo(standX + standWidth, standY);
      ctx.lineTo(standX + standWidth * 1.5, standY + standHeight);
      ctx.lineTo(standX - standWidth * 0.5, standY + standHeight);
      ctx.closePath();
      ctx.fill();
      
      // Base
      const baseWidth = monitorWidth * 1.2;
      const baseHeight = monitorHeight * 0.15;
      const baseX = centerX - baseWidth / 2;
      const baseY = standY + standHeight;
      
      ctx.fillStyle = colors.base;
      ctx.fillRect(baseX, baseY, baseWidth, baseHeight);
      
      // Keyboard
      const keyboardWidth = monitorWidth * 0.9;
      const keyboardHeight = monitorHeight * 0.15;
      const keyboardX = centerX - keyboardWidth / 2;
      const keyboardY = baseY + baseHeight + 10;
      
      ctx.fillStyle = colors.keyboard;
      ctx.fillRect(keyboardX, keyboardY, keyboardWidth, keyboardHeight);
      
      // Keyboard keys
      const keySize = keyboardWidth * 0.065;
      const keySpacingX = keyboardWidth * 0.03;
      const keySpacingY = keyboardHeight * 0.2;
      const keysPerRow = 10;
      const numRows = 3;
      
      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < keysPerRow; col++) {
          const keyX = keyboardX + keySize / 2 + col * (keySize + keySpacingX);
          const keyY = keyboardY + keySize / 2 + row * (keySize + keySpacingY);
          
          ctx.fillStyle = colors.keys;
          ctx.fillRect(
            keyX,
            keyY,
            keySize,
            keySize / 2
          );
        }
      }
      
      // Indicator lights
      // Red light (blinking)
      const blinkIntensity = Math.sin(time * 5) * 0.5 + 0.5;
      const redLightColor = `rgba(239, 68, 68, ${blinkIntensity})`;
      ctx.fillStyle = redLightColor;
      ctx.beginPath();
      ctx.arc(monitorX + monitorWidth - 20, monitorY + 20, 5, 0, Math.PI * 2);
      ctx.fill();
      
      // Green light (steady)
      ctx.fillStyle = colors.greenLight;
      ctx.beginPath();
      ctx.arc(monitorX + monitorWidth - 40, monitorY + 20, 5, 0, Math.PI * 2);
      ctx.fill();
    };
    
    // Animation loop
    const animate = () => {
      time += 0.05;
      drawComputer(time);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setupCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full object-contain cursor-pointer"
      style={{ 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
    />
  );
};

export default RetroComputer3D;