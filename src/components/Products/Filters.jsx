import React from "react";

const Filters = () => {
    return (
        <div className="flex gap-10 mb-10">
            <div className="w-full relative">
                <select id="large" class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 cursor-pointer appearance-none">
                    <option selected>Brand</option>
                    <option value="US">Addidas</option>
                    <option value="CA">Nike</option>
                    <option value="FR">Puma</option>
                    <option value="DE">AIR</option>
                </select>
                <svg className="absolute w-[22px] h-[22px] right-[10px] top-[14px]" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg>
            </div>
            <div className="w-full relative">
                <select id="large" class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 cursor-pointer appearance-none">
                    <option selected>Price</option>
                    <option value="US">Low to High</option>
                    <option value="CA">High to Low</option>
                </select>
                <svg className="absolute w-[22px] h-[22px] right-[10px] top-[14px] r-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg>
            </div>
            <div className="w-full relative">
                <select id="large" class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 cursor-pointer appearance-none">
                    <option selected>Colours</option>
                    <option value="US">Red</option>
                    <option value="CA">Green</option>
                    <option value="FR">Blue</option>
                    <option value="DE">Black</option>
                </select>
                <svg className="absolute w-[22px] h-[22px] right-[10px] top-[14px] r-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg>
            </div>
            <div className="w-full relative">
                <select id="large" class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 cursor-pointer appearance-none">
                    <option selected>Categroies</option>
                    <option value="US">Athletic Footwear</option>
                    <option value="US">Casual Footwear</option>
                    <option value="US">Formal Footwear</option>
                    <option value="US">Boots</option>
                    <option value="US">Sandals</option>
                    <option value="US">Slippers</option>
                    <option value="US">Specialized Footwear</option>
                    <option value="US">Fashion Footwear</option>
                </select>
                <svg className="absolute w-[22px] h-[22px] right-[10px] top-[14px] r-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg>
            </div>
        </div>
    );
}
export default Filters;