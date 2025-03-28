import { useState } from "react";
import { Image } from "lucide-react";

interface OperatorEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  operator: {
    operatorName: string;
    phoneNo: string;
    licenseNo: string;
    status: string;
  } | null;
}

const OperatorEditModal = ({
  isOpen,
  onClose,
  operator,
}: OperatorEditModalProps) => {
  const [, setDocuments] = useState({
    document1: null,
    document2: null,
    operatorProof: null,
    verificationDoc: null,
  });

  if (!isOpen) return null;

  const handleDocumentDelete = (docKey: string) => {
    setDocuments((prev) => ({ ...prev, [docKey]: null }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  defaultValue={operator?.operatorName}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  License No
                </label>
                <input
                  type="text"
                  defaultValue={operator?.licenseNo}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Document1
                </label>
                <div className="flex items-center gap-2 mt-1">
                  <div className="border rounded p-2">
                    <Image className="w-6 h-6" />
                  </div>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">
                    View
                  </button>
                  <button
                    className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
                    onClick={() => handleDocumentDelete("document1")}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Operator Proof
                </label>
                <div className="flex items-center gap-2 mt-1">
                  <div className="border rounded p-2">
                    <Image className="w-6 h-6" />
                  </div>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">
                    View
                  </button>
                  <button
                    className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
                    onClick={() => handleDocumentDelete("operatorProof")}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone No
                </label>
                <input
                  type="tel"
                  defaultValue={operator?.phoneNo}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Id
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Document2
                </label>
                <div className="flex items-center gap-2 mt-1">
                  <div className="border rounded p-2">
                    <Image className="w-6 h-6" />
                  </div>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">
                    View
                  </button>
                  <button
                    className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
                    onClick={() => handleDocumentDelete("document2")}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Verification Doc
                </label>
                <div className="flex items-center gap-2 mt-1">
                  <div className="border rounded p-2">
                    <Image className="w-6 h-6" />
                  </div>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">
                    View
                  </button>
                  <button
                    className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
                    onClick={() => handleDocumentDelete("verificationDoc")}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="status"
                      value="active"
                      defaultChecked={operator?.status === "active"}
                      className="mr-2"
                    />
                    Active
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="status"
                      value="inactive"
                      defaultChecked={operator?.status === "inactive"}
                      className="mr-2"
                    />
                    In Active
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorEditModal;
