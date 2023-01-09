import { useState } from "react"
import { Map, MapMarker } from "react-kakao-maps-sdk"

function map() {
    const [draggable, setDraggable] = useState(true)

    return (
        <>
            <Map
            center={{ lat: 33.5563, lng: 126.79581 }}
            style={{ width: "90%", height: "70%" }}
            level={3} // 지도의 확대 레벨
            draggable={draggable}
            >
            <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                <div style={{ color: "#000" }}>Hello World!</div>
            </MapMarker>
            </Map>
        
            <div>
            <button onClick={() => setDraggable(false)}>지도 드래그 이동 끄기</button>
            <button onClick={() => setDraggable(true)}>지도 드래그 이동 켜기</button>
            </div>
            </>
    )
}

export default map