
const CustomLeftArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-arrow  left-0 top-1/2 transform -translate-y-1/2 absolute font-black	 text-[#200f43] bg-[#ffffff4f] p-2 rounded-full z-50">
    &lt; 
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-arrow right-0 top-1/2 transform -translate-y-1/2 absolute font-black	 text-[#200f43] bg-[#ffffff4f] p-2 rounded-full z-10">
    &gt; 
  </button>
);

export { CustomLeftArrow, CustomRightArrow };
