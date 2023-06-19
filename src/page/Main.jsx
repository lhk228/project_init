import { useEffect, useState } from "react";

const Main = () => {
  const [item, setItem] = useState("")
  useEffect(() => {
    const handleStorageChange = (event) => {
      console.log("event :",event);
      if (event.storageArea === localStorage) {
        const storedJsonString = localStorage.getItem('item');
        if (storedJsonString) {
          const storedObj = JSON.parse(storedJsonString);
          // 변경된 데이터 사용
          console.log("데이터 :",storedObj);
          setItem(storedObj);
          //로컬스토리지 초기화
          localStorage.removeItem('item');
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  return ( 
    <div>
      <div>이름:{item.item}, 가격 {item.price}</div>
      <iframe width='853' height='480' title="메타포트" src='https://my.matterport.com/show/?m=aFG3kyivcVs&play=1' frameBorder='0' allowFullscreen allow='xr-spatial-tracking'></iframe>
    </div>
   );
}

export default Main