import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import Router from "@config/Router";
import "./index.css";
import { useMainLayout } from "@layout/MainLayout";

const App = () => {
  const { backEnabled, backUrl } = useMainLayout();

  return (
    <div className="flex flex-col">
      <div className="font-semibold flex items-center justify-between p-3 bg-black text-white flex-nowrap">
        {backEnabled && backUrl && (
          <button
            onClick={() => {
              if (backUrl) {
                window.location.href = backUrl;
              }
            }}
            className="w-14 whitespace-nowrap"
          >
            {"< "}Back
          </button>
        )}
        <h2 className="w-full text-center">Home</h2>
        {backEnabled && backUrl && (<span className="w-14" />)}
      </div>
      <div className="p-4">
        <RouterProvider router={Router} />
      </div>
    </div>
  );
};

export default App;
