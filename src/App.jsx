import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "@/layout/MainLayout.jsx";
import {HomePage, PNFPage, Result} from "@/pages/index.js";
import {AllRooms, Reservation, ReservationDetail, RoomDetail} from "@/features/index.js";
import {RDGuard, ReservationGuard, RoomsGuard, ScrollToTop} from "@/components/index.js";
import {ConfigProvider} from "antd";

const App = () => {
    return (
        <section>
            <ConfigProvider theme={{
                components : {
                    Input: {
                        controlHeight: 40,
                        fontFamily: "Roboto",
                        borderRadius: 2
                    },
                }
            }}>
            <BrowserRouter>
                    <ScrollToTop/>
                <Routes>
                    <Route path={"/"} element={<MainLayout/>} >
                        <Route index element={<HomePage/>} />

                    {/*    rooms */}
                        <Route path={"/rooms"}  >
                        <Route index element={
                            <RoomsGuard>
                                <AllRooms/>
                            </RoomsGuard>
                        } />
                        <Route path={":roomId"} element={<RoomDetail/> } />
                        </Route>

                    {/* reservation   */}
                        <Route path={"/reservation"} element={
                            <ReservationGuard>
                                <Reservation/>
                            </ReservationGuard>
                        }>
                        </Route>
                        <Route path={"/receipt"} element={<RDGuard>
                            <ReservationDetail/>
                        </RDGuard> } />
                            <Route path={"/result"} element={<Result/>} />
                    </Route>
                    <Route path={"*"} element={<PNFPage/>}  />
                </Routes>
            </BrowserRouter>
            </ConfigProvider>
        </section>
    );
};

export default App;
