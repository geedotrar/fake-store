import React from "react";

export default function ProductModal(props) {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl w-full">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-2 px-5">
            <h3 className="text-lg font-bold">{props.data[props.id - 1].title}</h3>
            <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => props.setDisplay(false)}>
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
            </button>
          </div>
          <div>
            <div className="flex items-center justify-center px-12 ">
              <div>
                <img src={props.data[props.id - 1].image} class="items-center w-24 h-24 ..." alt="" />
                <p className="text-justify">{props.data[props.id - 1].description}</p>
                <div className="text-start ">
                  <button
                    type="button"
                    class="text-white bg-gray-800 hover:bg-[#24292A]/90 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    onClick={() => props.setDisplay(false)}
                  >
                    <span>Back</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
