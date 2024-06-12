import IconCloud from '../components/Cloud'
import GradualSpacing from '../components/Text';

const Home = () => {
  return (
    <div className='h-screen flex flex-wrap justify-around items-center'>
        <div>
          <GradualSpacing
      className="font-display text-center font-bold tracking-[-0.1em]  text-black dark:text-white md:text-4xl md:leading-[5rem]"
      text="Decentralized Voting Application"
/>
<GradualSpacing
      className="font-display text-center font-bold tracking-[-0.1em]  text-black dark:text-slate-300 md:text-2xl md:leading-[5rem]"
      text="A decentralized voting application in Ethereum BlockChain."/>
</div>
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
    <IconCloud iconSlugs={slugs} />
  </div>
  </div>
  )
}

export default Home;



const slugs = [
    "solana",
    "ethereum",
    "Rust",
    "react",
    "vercel",
    "solidity",
    "anchor",
    "visualstudiocode",
    "hardhat",
    "typescript",
    "javascript",
    "tailwind",
    "vite",
  ];
