import React from 'react';



export default function GradientUnderline(){
    return (
        
        <div className="relative mt-1"> 
                  {/* Gradients */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent blur-sm" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1/4 h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent blur-sm" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1/4 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        </div> 
        
    );
}