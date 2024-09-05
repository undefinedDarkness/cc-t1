
interface Rank {
  name: string;
  score: number,
  trend: 'up' | 'down'
}

const Podium = () => {
  return (

    <div className="grid grid-cols-3 w-full h-1/2 gap-x-[2px] items-end">
      <div className=" bg-vit-blue flex justify-center flex-col text-white items-center h-[70%] rounded-l-2xl relative">
        <div className="w-[150px] h-[150px] border-8 border-gray-400 bg-center bg-contain bg-no-repeat rounded-[100%] absolute top-[-100px]" style={{
          backgroundImage: 'url("/pfp.png")',
        }}></div>
        <h1 className="text-2xl text-center">Jackson</h1>
        <h2 className="text-2xl font-bold">1847</h2>
        <span className="absolute top-[24px] text-black px-4 py-1 rounded-md font-bold bg-gray-300">2</span>
        {/* <span>2</span> */}
      </div>

      <div className="bg-vit-blue flex justify-center flex-col text-white items-center h-[80%] rounded-t-2xl relative">
        <div className="w-[150px] h-[150px] border-8 border-yellow-300 bg-center bg-contain bg-no-repeat rounded-[100%] absolute top-[-100px]" style={{
          backgroundImage: 'url("/pfp.png")',
        }}></div>
        <img src="/crown.png" className="top-[-200px] absolute" alt="" />
        <h1 className="text-2xl text-center">Eiden</h1>
        <h2 className="text-2xl font-bold">2430</h2>
        <span className="absolute top-[24px] text-black px-4 py-1 rounded-md font-bold bg-yellow-300">1</span>
      </div>

      <div className="bg-vit-blue flex justify-center flex-col text-white items-center h-[70%] rounded-r-2xl relative">
        <div className="w-[150px] h-[150px] border-8 border-bronze bg-center bg-contain bg-no-repeat rounded-[100%] absolute top-[-100px]" style={{
          backgroundImage: 'url("/pfp.png")',
        }}></div>
        <h1 className="text-2xl text-center">Emma Aria</h1>
        <h2 className="text-2xl font-bold">1674</h2>
        <span className="absolute top-[24px] text-black px-4 py-1 rounded-md font-bold bg-bronze">3</span>
        {/* <span>3</span> */}
      </div>
    </div>

  );
};

const RankingList = ({ items }: { items: Rank[] }) => {
  return (
    <div className="bg-vit-blue w-full p-4 rounded-t-2xl lg:rounded-[10%] max-w-md">
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-between py-4 border-b border-gray-400 last:border-b-0">
          <div className="flex items-center">
            <div className="w-8 h-8 text-xl border-white border-4 p-6 rounded-full flex items-center justify-center text-white font-bold mr-3">
              #{index + 3}
            </div>
            <span className="text-white">{item.name}</span>
          </div>
          <div className="flex items-center">
            <span className="text-white font-bold mr-2">{item.score}</span>
            {item.trend === 'up' && <span className="text-green-400">▲</span>}
            {item.trend === 'down' && <span className="text-red-400">▼</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

const rankingData: Rank[] = [
  { name: "Sebastian", score: 1124, trend: 'up' },
  { name: "Jason", score: 875, trend: 'down' },
  { name: "Natalie", score: 774, trend: "up" },
  { name: "Serenity", score: 723, trend: 'up' },
  { name: "Hannah", score: 559, trend: "down" }
];

function App() {

  return (
    <div className="w-full h-full max-min-w-[100vw] min-h-[100vh] lg:p-[2em] bg-blue-100 flex flex-nowrap flex-col">
      <nav className="flex justify-between items-center pt-6 pb-8">
        <svg className="size-10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.81809 4.18179C8.99383 4.35753 8.99383 4.64245 8.81809 4.81819L6.13629 7.49999L8.81809 10.1818C8.99383 10.3575 8.99383 10.6424 8.81809 10.8182C8.64236 10.9939 8.35743 10.9939 8.1817 10.8182L5.1817 7.81819C5.09731 7.73379 5.0499 7.61933 5.0499 7.49999C5.0499 7.38064 5.09731 7.26618 5.1817 7.18179L8.1817 4.18179C8.35743 4.00605 8.64236 4.00605 8.81809 4.18179Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        <h1 className="text-2xl font-bold lg:text-4xl">Leaderboard</h1>
        <svg className="size-10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
      </nav>
      <div className="flex justify-center items-center">
        <div className="rounded-md bg-white">
          <button className="px-3 py-2 mx-5 my-1 border-b-2 border-blue-950">Organization</button>
          <button className="px-3 py-2  mx-5 my-1">Department</button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 flex-1">
        <div className="flex justify-center items-center lg:p-0 px-6 min-h-[80vh]">
          <Podium></Podium>
        </div>
        <div className="flex justify-center lg:items-center items-end">
          <RankingList items={rankingData}></RankingList>
        </div>
      </div>
    </div>
  )
}

export default App
