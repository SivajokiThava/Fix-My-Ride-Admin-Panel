import { useState } from "react";
import { Image } from "lucide-react";
import Button from "./Button";

interface DriverEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  driver: {
    driverName: string;
    phoneNo: string;
    licenseNo: string;
    status: string;
  } | null;
}

const DriverEditModal = ({ isOpen, onClose, driver }: DriverEditModalProps) => {
  const [, setDocuments] = useState({
    document1: null,
    document2: null,
    drivingLicense: null,
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
                  defaultValue={driver?.driverName}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  License No
                </label>
                <input
                  type="text"
                  defaultValue={driver?.licenseNo}
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
                  Driving License
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
                    onClick={() => handleDocumentDelete("drivingLicense")}
                  >
                    Delete
                  </button>
                </div>
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
                  defaultValue={driver?.phoneNo}
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
            </div>
          </div>

          {/* Bottom Section - Modified to two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                License No
              </label>
              <input
                type="text"
                defaultValue={driver?.licenseNo}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
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
                    defaultChecked={driver?.status === "active"}
                    className="mr-2"
                  />
                  Active
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="inactive"
                    defaultChecked={driver?.status === "inactive"}
                    className="mr-2"
                  />
                  In Active
                </label>
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
            <Button>Update</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverEditModal;
