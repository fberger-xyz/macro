'use client'

import IconWrapper from '@/components/common/IconWrapper'
import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import { RESSOURCES } from '@/config/app.config'

// todo lending market hyperliquid

export default function Page() {
    return (
        <PageWrapper className="mb-10 gap-5">
            <div className="flex w-full flex-col gap-3">
                {RESSOURCES.map((ressource, ressourceIndex) => (
                    <div key={ressourceIndex} className="flex flex-col rounded-md">
                        <p className="text-sm text-primary">{ressource.name}</p>
                        {ressource.proxies.map((proxy, proxyIndex) => (
                            <div className="w-full" key={`${ressourceIndex}-${proxyIndex}`}>
                                <LinkWrapper
                                    target="_blank"
                                    href={proxy.socials[0].href}
                                    className="group flex w-full justify-between gap-2 rounded-sm px-1 hover:bg-very-light-hover md:items-center"
                                >
                                    <div className="flex flex-wrap items-baseline gap-2 py-1 text-xs md:text-sm">
                                        <p className="text-inactive">{proxyIndex + 1}.</p>
                                        {proxy.author && <p>{proxy.author}</p>}
                                        {proxy.author && proxy.name && <p className="text-inactive">{'>'}</p>}
                                        {proxy.name && <p className="text-secondary">{proxy.name}</p>}
                                        {proxy.toMonitor.length > 0 && <p className="text-inactive">{'>'}</p>}
                                        {proxy.toMonitor.length > 0 && <p className="text-default">{proxy.toMonitor}</p>}
                                    </div>
                                    <div className="hidden grow border-b border-dashed border-light-hover text-sm group-hover:border-secondary md:flex" />
                                    <div className="flex gap-2">
                                        {proxy.socials.map((social, socialIndex) => (
                                            <div key={`${ressourceIndex}-${proxyIndex}-${socialIndex}`}>
                                                <LinkWrapper
                                                    target="_blank"
                                                    href={social.href}
                                                    className="cursor-alias rounded-md p-1 hover:bg-light-hover hover:text-primary"
                                                >
                                                    <IconWrapper icon={social.icon} className="size-4" />
                                                </LinkWrapper>
                                            </div>
                                        ))}
                                    </div>
                                </LinkWrapper>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </PageWrapper>
    )
}
