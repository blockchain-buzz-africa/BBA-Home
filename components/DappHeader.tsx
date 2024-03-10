
import Link from "next/link";

type Props = {}

const DappHeader = (props: Props) => {
  return (
    <Link href={'/dappstore'} className="p-5 flex flex-col gap-3">
    <div className="flex flex-col text-xs max-w-[344px]">
      <div className="self-end italic font-light text-black whitespace-nowrap">
        dapp
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f3c1e44bd4f9d9571a8ec81b061f2ae3efb735b0e0fdef0acc82ea62bcdb521d?apiKey=d4f7705f986241a38b2ea8bbe8c3a3f1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3c1e44bd4f9d9571a8ec81b061f2ae3efb735b0e0fdef0acc82ea62bcdb521d?apiKey=d4f7705f986241a38b2ea8bbe8c3a3f1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3c1e44bd4f9d9571a8ec81b061f2ae3efb735b0e0fdef0acc82ea62bcdb521d?apiKey=d4f7705f986241a38b2ea8bbe8c3a3f1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3c1e44bd4f9d9571a8ec81b061f2ae3efb735b0e0fdef0acc82ea62bcdb521d?apiKey=d4f7705f986241a38b2ea8bbe8c3a3f1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3c1e44bd4f9d9571a8ec81b061f2ae3efb735b0e0fdef0acc82ea62bcdb521d?apiKey=d4f7705f986241a38b2ea8bbe8c3a3f1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3c1e44bd4f9d9571a8ec81b061f2ae3efb735b0e0fdef0acc82ea62bcdb521d?apiKey=d4f7705f986241a38b2ea8bbe8c3a3f1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3c1e44bd4f9d9571a8ec81b061f2ae3efb735b0e0fdef0acc82ea62bcdb521d?apiKey=d4f7705f986241a38b2ea8bbe8c3a3f1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3c1e44bd4f9d9571a8ec81b061f2ae3efb735b0e0fdef0acc82ea62bcdb521d?apiKey=d4f7705f986241a38b2ea8bbe8c3a3f1&"
        className="mt-2 w-full aspect-[1.33]"
      />
      <div className="mt-3 text-xl text-neutral-950">
        <span className="font-bold text-fuchsia-700">SWYPT:</span> Bridging fiat
        and crypto
        </div>
      <div className="flex gap-2 py-1 pr-5 mt-3 text-neutral-600">
        <div className="whitespace-nowrap">Sep 29 2023</div>
        <div className="flex-auto">Author : Michael Loupa</div>
      </div>
    </div>
      </Link>
  )
}

export default DappHeader