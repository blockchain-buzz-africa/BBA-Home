import Link from "next/link";
import Image from "next/image";
import Halofi from "./../public/halofi.svg"

type Props = {}

const Dapp = (props: Props) => {
    return (
        <Link href={'https://www.halofi.me/'} className="p-5  ">
            <div className="p-5 flex gap-2 justify-center border-b border-solid border-neutral-400">
                <Image src={Halofi} alt="halofi" className="shrink-0 my-auto aspect-[1.43] w-[90px]"
                    />
                <div className="flex flex-col grow shrink-0 justify-center px-5 mt-1.5 basis-0 w-fit">
                    <div className="flex ">
                        <div className="flex-auto text-xs font-extrabold tracking-wider leading-5 text-fuchsia-700 uppercase">
                    Halofi
                        </div>
                        <div className="justify-center px-1.5 my-auto text-xs font-semibold leading-4 text-white whitespace-nowrap rounded-md bg-blue-950">
                    ad
                        </div>
                    </div>
                    <div className="text-xs font-semibold leading-4 text-neutral-950">
                    Your gateway to dollar-pegged savings. Deposit. Earn interest and save towards your goals.
                    </div>
                    <div className="flex gap-1.5 mt-1.5 text-xs leading-4 whitespace-nowrap text-neutral-950">
                        <div>#stablecoins</div>
                        <div>#fintech</div>
                        <div className="flex-auto">#crypto</div>
                    </div>
            </div>
            </div>

      
        </Link>
        
        
    )
  }
  
  export default Dapp