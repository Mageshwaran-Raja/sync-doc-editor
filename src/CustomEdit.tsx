import React, { useRef, useState, useEffect } from 'react';
import { DocumentEditorContainerComponent, ToolbarComponent } from '@syncfusion/ej2-react-documenteditor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import '@syncfusion/ej2-react-buttons/styles/material.css';
import '@syncfusion/ej2-react-documenteditor/styles/material.css';

// Ensure you have the necessary Syncfusion styles imported
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-documenteditor/styles/material.css';

const CustomEdit: React.FC = () => {
  const editorRef = useRef<DocumentEditorContainerComponent>(null);
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const [isEditorLoaded, setIsEditorLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Load a sample document or load it based on your use case
    fetch('https://cdn.syncfusion.com/content/ej2/material.css')
      .then(response => response.arrayBuffer())
      .then(data => {
        if (editorRef.current?.documentEditor) {
          editorRef.current.documentEditor.open(new Uint8Array(data));
          setIsEditorLoaded(true);
        }
      });
  }, []);

  const generateThumbnails = () => {
    const editor = editorRef.current?.documentEditor;
    if (editor && isEditorLoaded) {
      const pageCount = editor.pageCount;
      const thumbnails: string[] = [];

      for (let i = 0; i < pageCount; i++) {
        const canvas = editor.exportAsImage(i, 1);
        const imageUrl = canvas.toDataURL();
        thumbnails.push(imageUrl);
      }

      setThumbnails(thumbnails);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '20%', overflowY: 'scroll', height: '500px', borderRight: '1px solid #ddd' }}>
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Page ${index + 1}`}
            style={{ width: '100%', marginBottom: '10px', cursor: 'pointer' }}
            onClick={() => editorRef.current?.documentEditor.scrollToPage(index + 1)}
          />
        ))}
      </div>
      <div style={{ width: '80%' }}>
          <ButtonComponent onClick={generateThumbnails} disabled={!isEditorLoaded}>
            Generate Thumbnails
          </ButtonComponent>
        <DocumentEditorContainerComponent
          ref={editorRef}
          height={'500px'}
          enableToolbar={true}
          serviceUrl={'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/'}
        />
      </div>
    </div>
  );
};

export default CustomEdit;