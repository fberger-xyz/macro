'use client'

import PageWrapper from '@/components/common/PageWrapper'

export default function Page() {
    return (
        <PageWrapper className="mb-10 gap-5">
            <div className="flex w-full flex-col gap-2.5 border-l border-light-hover">
                <p>Macro calendar</p>
                <p>OI/fundings</p>
                <p>Lending markets</p>
                <p>Polymarket</p>
                <p>NVIDIA</p>
                <p>Arthur Hayes articles</p>
                <p>Roadmap ETH</p>
                <p>Farside flows</p>
            </div>
        </PageWrapper>
    )
}
