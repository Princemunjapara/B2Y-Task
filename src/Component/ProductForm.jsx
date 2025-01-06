import React, { useState } from "react";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    brand: "",
    weight: "",
    gender: "",
    size: [],
    colors: [],
    description: "",
    tagNumber: "",
    stock: "",
    tag: "",
    price: "",
    discount: "",
    tax: "",
    image: null, // State to hold uploaded image
  });

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colorOptions = ["red", "blue", "yellow", "green", "black", "white", "purple", "pink"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSizeChange = (size) => {
    setFormData((prev) => ({
      ...prev,
      size: prev.size.includes(size)
        ? prev.size.filter((s) => s !== size)
        : [...prev.size, size],
    }));
  };

  const handleColorChange = (color) => {
    setFormData((prev) => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with actual form submission logic
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Add Product</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section: Product Image */}
          <div className="col-span-1">
            <div className="border border-gray-300 rounded-lg p-4">
              {/* Display the uploaded image */}
              {formData.image ? (
                <img
                  src={formData.image}
                  alt="Product"
                  className="w-full h-auto rounded-md"
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-md">
                  <span className="text-gray-500">No Image Selected</span>
                </div>
              )}
            </div>

            {/* Image Upload Input */}
            <div className="mt-6">
              <label className="block text-gray-700 font-medium">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Size Selection */}
            <div className="mt-6">
              <label className="block text-gray-700 font-medium">Size</label>
              <div className="flex flex-wrap space-x-4 mt-2">
                {sizes.map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() => handleSizeChange(size)}
                    className={`px-4 py-2 border rounded-lg mb-2 ${
                      formData.size.includes(size)
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mt-6">
              <label className="block text-gray-700 font-medium">Colors</label>
              <div className="flex space-x-2 mt-2">
                {colorOptions.map((color) => (
                  <div
                    key={color}
                    className={`w-6 h-6 rounded-full border-2 cursor-pointer ${
                      formData.colors.includes(color)
                        ? `border-${color}-500`
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorChange(color)}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section: Form Fields */}
          <div className="col-span-1 md:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Product Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium">Product Name</label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter product name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Category</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">Brand</label>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter brand"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">Weight</label>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. 1kg"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unisex">Unisex</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <label className="block text-gray-700 font-medium">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter a description about the product"
                ></textarea>
              </div>

              {/* Additional Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <label className="block text-gray-700 font-medium">Tag Number</label>
                  <input
                    type="text"
                    name="tagNumber"
                    value={formData.tagNumber}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter tag number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">Stock</label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter stock quantity"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">Tag</label>
                  <input
                    type="text"
                    name="tag"
                    value={formData.tag}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter tag"
                  />
                </div>
              </div>

              {/* Pricing Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <label className="block text-gray-700 font-medium">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter price"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">Discount</label>
                  <input
                    type="number"
                    name="discount"
                    value={formData.discount}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter discount percentage"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">Tax</label>
                  <input
                    type="number"
                    name="tax"
                    value={formData.tax}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter tax percentage"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 mt-8">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Create Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
