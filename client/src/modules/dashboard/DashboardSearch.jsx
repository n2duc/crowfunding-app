import { useState } from "react";
import { defaultImageAuthor } from "../../constants/global";

const DashboardSearch = () => {
    const [search, setSearch] = useState(false);
    return (
        <div className="relative z-50">
            <div className="bg-white dark:bg-darkSecond rounded-full shadow-[10px_10px_20px_0px_rgba(218,213,213,0.15)] dark:shadow-none p-[5px] pl-[15px] flex items-center">
                <div className="flex-1 p-[10px]">
                    <input type="text" placeholder="Do fundrise now" className="w-full bg-transparent text-sm placeholder:text-text4 text-text1 border-none outline-none dark:placeholder:text-text2 dark:text-white" />
                </div>
                <button className="h-full py-[11px] px-7 bg-primary rounded-full text-white" onClick={() => setSearch(!search)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {search && <div className="search-results absolute lg:w-[843px] w-[327px] bg-white dark:bg-darkBg top-full lg:left-0 z-50 lg:translate-y-5 translate-y-[15px] rounded-[20px] left-2/4 -translate-x-2/4 lg:translate-x-0">
                <div className="flex items-center justify-between p-[10px] bg-graySoft dark:bg-darkSecond rounded-[20px]">
                    <a href="#!" className="text-text1 dark:text-white font-medium text-sm ml-4 underline">See all 10,124 fundraisier</a>
                    <button className="px-6 py-[13px] rounded-[10px] text-error bg-error bg-opacity-10" onClick={() => setSearch(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="p-6">
                    <div className="flex flex-col mb-6 gap-y-5">
                        <SearchResult></SearchResult>
                        <SearchResult></SearchResult>
                        <SearchResult></SearchResult>
                    </div>
                    <h3 className="text-sm font-semibold mb-5 dark:text-text4">Releted searchs</h3>
                    <div className="flex flex-col gap-y-[10px] text-sm text-text2">
                        <p><span className="text-text1 dark:text-text4">education</span> fund</p>
                        <p>schoralship fund</p>
                        <p><span className="text-text1 dark:text-text4">education</span> and schools fund</p>
                    </div>
                </div>
            </div>}
        </div>
    );
};

function SearchResult() {
    return (
        <div className="flex items-center gap-x-5">
            <img src={defaultImageAuthor} className="w-[50px] h-[50px] object-cover rounded-[10px]" alt="" />
            <div className="flex-1 text-sm">
                <h3 className="text-text1 dark:text-white mb-1"><strong>Education</strong> fund for Durgham Family</h3>
                <p className="text-text3">By Durgham Family</p>
            </div>
        </div>
    )
}

export default DashboardSearch;
