import React, { useState } from "react";
import Button from "./Button";

interface DocumentRow {
  documentName: string;
  documentType: string;
}

interface DriverDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (documents: DocumentRow[]) => void;
}

const DriverDocumentModal: React.FC<DriverDocumentModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [documents, setDocuments] = useState<DocumentRow[]>([
    { documentName: "Driving License", documentType: "Pdf/Jpeg/Png" },
    { documentName: "Vehicle Registration", documentType: "Pdf/Jpeg/Png" },
    { documentName: "MOT", documentType: "Pdf/Jpeg/Png" },
    { documentName: "DVLA License", documentType: "Pdf/Jpeg/Png" },
  ]);

  const [location, setLocation] = useState({
    country: "United Kingdom",
    state: "London",
    city: "London",
  });

  const addDocument = () => {
    setDocuments([
      ...documents,
      { documentName: "Driving License", documentType: "Pdf/Jpeg/Png" },
    ]);
  };

  const removeDocument = (index: number) => {
    setDocuments(documents.filter((_, i) => i !== index));
  };

  const handleDocumentChange = (
    index: number,
    field: keyof DocumentRow,
    value: string
  ) => {
    const newDocuments = [...documents];
    newDocuments[index] = { ...newDocuments[index], [field]: value };
    setDocuments(newDocuments);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded shadow-lg w-full max-w-4xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Documents</h2>

          {/* Location Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block mb-1 text-sm">Country</label>
              <select
                className="w-full border rounded p-2"
                value={location.country}
                onChange={(e) =>
                  setLocation({ ...location, country: e.target.value })
                }
              >
                <option>United Kingdom</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-sm">State</label>
              <select
                className="w-full border rounded p-2"
                value={location.state}
                onChange={(e) =>
                  setLocation({ ...location, state: e.target.value })
                }
              >
                <option>London</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-sm">City</label>
              <select
                className="w-full border rounded p-2"
                value={location.city}
                onChange={(e) =>
                  setLocation({ ...location, city: e.target.value })
                }
              >
                <option>London</option>
              </select>
            </div>
          </div>

          {/* Document Section */}
          <div className="border rounded p-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Document</h3>

            {documents.map((doc, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 items-end"
              >
                <div>
                  <label className="block mb-1 text-sm">Document Name</label>
                  <select
                    className="w-full border rounded p-2"
                    value={doc.documentName}
                    onChange={(e) =>
                      handleDocumentChange(
                        index,
                        "documentName",
                        e.target.value
                      )
                    }
                  >
                    <option>Driving License</option>
                    <option>Vehicle Registration</option>
                    <option>MOT</option>
                    <option>DVLA License</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <div className="flex-grow">
                    <label className="block mb-1 text-sm">Document Type</label>
                    <select
                      className="w-full border rounded p-2"
                      value={doc.documentType}
                      onChange={(e) =>
                        handleDocumentChange(
                          index,
                          "documentType",
                          e.target.value
                        )
                      }
                    >
                      <option>Pdf/Jpeg/Png</option>
                    </select>
                  </div>
                  <button
                    onClick={() => removeDocument(index)}
                    className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mt-6"
                  >
                    -
                  </button>
                  <button
                    onClick={addDocument}
                    className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mt-6"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button onClick={() => onSave(documents)}>Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDocumentModal;
