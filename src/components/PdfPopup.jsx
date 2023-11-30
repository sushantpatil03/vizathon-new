import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import './PdfPopup.css'; // Add your styling

const PdfPopup = ({ pdfUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="pdf-popup">
      <button onClick={handleOpen}>Open PDF</button>
      {isOpen && (
        <div className="pdf-popup-overlay">
          <div className="pdf-popup-content">
            <Document file={pdfUrl}>
              <Page pageNumber={1} />
            </Document>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfPopup;
