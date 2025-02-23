"use client"

import {Column} from "@/components/wrapper/Column";
import ProductCard from "@/components/molecules/ProductCard";
import Navbar from "@/components/molecules/Navbar";
import {useRouter} from "next/navigation";
import SearchBarWithFilter from "@/components/molecules/SearchFilter";
import {useGetAllCommodity} from "@/service/query/comodity-query";
import {Loading} from "@/components/molecules/Loading";
import {useEffect, useState} from "react";
import {Row} from "@/components/wrapper/Row";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import { incrementClickPage } from "@/service/remote/comodity.remote";

export default function Home() {
    const router = useRouter();

    const [type, setType] = useState<"all" | "filter">("all")
    const [query, setQuery] = useState<string>()
    const [location, setLocation] = useState<string>()
    const [sort, setSort] = useState<'newest' | 'oldest' | 'cheap'>('newest')
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState(0);
    const {data: commodities, isLoading} = useGetAllCommodity(type, query, location, sort, currentPage);

    const handlePageChange = async (page: number) => {
        setCurrentPage(page);
    };


    useEffect(() => {
        if (commodities !== undefined) {
            setTotalPage(commodities[0]?.totalPages || 0)
        }
    }, [commodities, query, location, sort, currentPage]);


    const handleProductClick = async (commodityId: string) => {
        await incrementClickPage(commodityId);
        router.push(`/detail-product?id=${commodityId}`);
    };
    return (
        <Column className={'w-full mx-auto max-w-5xl mb-10'}>
            <Navbar/>

            <div className={'my-2'}></div>

            <SearchBarWithFilter
                onSort={(sortOption: 'newest' | 'oldest' | 'cheap') => {
                    setSort(sortOption)
                }}
                onSearch={(query: string) => {
                    if (query.length === 0) {
                        setQuery(undefined)
                        return
                    }
                    setType('filter')
                    setQuery(query)
                }} onFilter={
                (location: string) => {
                    console.log(location)
                    if (location === 'all') {
                        setLocation(undefined)
                        return
                    }
                    setType('filter')
                    setLocation(location)
                }
            }/>

            {commodities && commodities.length === 0 && (
                <Row className={'w-full justify-center my-4 text-center'}>
                    <h1 className={'text-2xl'}>Belum Ada Properti Tersedia</h1>
                </Row>
            )}

            {isLoading && <Loading className={'my-10'}/>}


            <div
                className={'mt-4 w-full grid sm:grid-cols-3 items-center justify-center grid-cols-2 md:grid-cols-4 gap-5'}>
                {
                    commodities?.map((commodity) => (
                        <ProductCard
                          commodity={commodity}
                          key={commodity.id}
                          onClick={() => handleProductClick(commodity.id  as string)}
                        />
                    ))
                }
            </div>


            {<Pagination className={"my-10"}>
                <PaginationContent>
                    {
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={currentPage !== 1 ? () => handlePageChange(currentPage - 1) : () => {
                                }}
                                isActive={currentPage !== 1}/>
                        </PaginationItem>
                    }


                    {[...Array(totalPage)].map((_, index) => {
                        const pageNumber = index + 1;
                        return (
                            <PaginationItem key={pageNumber}>
                                <PaginationLink
                                    isActive={currentPage === pageNumber}
                                    onClick={() => handlePageChange(pageNumber)}
                                >
                                    {pageNumber}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    })}

                    {
                         <PaginationItem>
                            <PaginationNext
                                onClick={currentPage !== totalPage ? () => handlePageChange(currentPage + 1) : () => {
                                }}
                                isActive={currentPage !== totalPage}/>
                        </PaginationItem>
                    }
                </PaginationContent>
            </Pagination>}


        </Column>
    );
}
