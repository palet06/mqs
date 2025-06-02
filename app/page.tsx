

const nesnem = {
  adi:"murat",
  tarih: new Date(),
  nasil:true,
  kac:5
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ul>
        <li>
           {nesnem.adi} {typeof nesnem.adi}
        </li>
        <li> 
          {nesnem.nasil} {typeof nesnem.nasil}
        </li>
        <li>
         {nesnem.kac} {typeof nesnem.kac}
        </li>
        <li>
            {typeof nesnem.tarih}
        </li>
      </ul>
    
     
     
   
    </div>
  );
}
