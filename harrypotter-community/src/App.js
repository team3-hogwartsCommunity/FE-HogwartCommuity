import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Header from "./components/Header";

import Router from "./shared/Router";

import Join from "./pages/Join";
import Login from "./pages/Login";
import HouseSort from "./pages/HouseSort";
import HouseResult from "./pages/HouseResult";

function App() {
  const queryClient = new QueryClient();

  // 컴포넌트 마운트 되면 데이터 불러옴

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <Pagination/> */}
        {/* <Header></Header> */}
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;
