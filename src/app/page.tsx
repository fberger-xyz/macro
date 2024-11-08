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
                {RESSOURCES.map((ressource) => (
                    <div key={ressource.index} className="flex flex-col rounded-md">
                        <p className="text-sm text-primary">{ressource.name}</p>
                        {ressource.proxies.map((proxy) => (
                            <div
                                key={`${ressource.index}-${proxy.index}`}
                                className="group flex w-full items-center justify-between gap-2 rounded-sm px-1 hover:bg-very-light-hover"
                            >
                                <div className="flex items-baseline gap-2 py-1 text-sm">
                                    <p className="text-xs text-inactive">{proxy.index + 1}.</p>
                                    {proxy.author && <p>{proxy.author}</p>}
                                    {proxy.author && proxy.name && <p className="text-inactive">{'>'}</p>}
                                    {proxy.name && <p className="text-secondary">{proxy.name}</p>}
                                    {proxy.toMonitor.length > 0 && <p className="text-inactive">{'>'}</p>}
                                    {proxy.toMonitor.length > 0 && <p className="text-xs text-default">{proxy.toMonitor}</p>}
                                </div>
                                <div className="flex grow border-b border-dashed border-light-hover text-sm group-hover:border-secondary" />
                                <div className="flex gap-2">
                                    {proxy.socials.map((social) => (
                                        <LinkWrapper
                                            key={`${ressource.index}-${proxy.index}-${social.index}`}
                                            target="_blank"
                                            href={social.href}
                                            className="cursor-alias rounded-md p-1 hover:bg-light-hover hover:text-primary"
                                        >
                                            <IconWrapper icon={social.icon} className="size-4" />
                                        </LinkWrapper>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </PageWrapper>
    )
}
