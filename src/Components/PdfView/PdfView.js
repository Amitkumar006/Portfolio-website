import React from 'react'
// Import the main component
import './PdfView.css'
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import pdfURL from '../../assets/Amit-kumar-cv.pdf'

 const PdfView = (props) => {

  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="container">
    <div className='pdf'>
      <div className='pdf-container'>
        {/* show pdf conditionally (if we have one)  */}
        {pdfURL&&<><Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
          <Viewer fileUrl={pdfURL}
            plugins={[defaultLayoutPluginInstance]}
            theme = 'dark'
             />
           
      </Worker></>}
      </div>

    </div>
    </div>
  )
}

export default PdfView
