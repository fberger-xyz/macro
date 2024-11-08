'use client'

import IconWrapper from '@/components/common/IconWrapper'
import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import { RESSOURCES } from '@/config/app.config'

export default function Page() {
    return (
        <PageWrapper className="mb-10 gap-5">
            <div className="flex w-full flex-col gap-3">
                {RESSOURCES.map((ressource, ressourceIndex) => {
                    const { name, proxies } = ressource
                    return (
                        <div key={`${name}-${ressourceIndex}`} className="flex flex-col gap-1 rounded-md">
                            <p className="text-sm text-primary">{name}</p>
                            {proxies.map((proxy, proxyIndex) => {
                                const { author, name: proxyName, toMonitor, socials } = proxy
                                const mainHref = socials[0]?.href || '#'

                                return (
                                    <div
                                        key={`${name}-${ressourceIndex}-${proxyName}-${proxyIndex}`}
                                        className="group flex w-full justify-between gap-2 rounded-sm bg-very-light-hover px-1 md:items-center"
                                    >
                                        <LinkWrapper
                                            target="_blank"
                                            href={mainHref}
                                            className="flex grow flex-wrap items-baseline gap-2 py-1 text-xs md:text-sm"
                                        >
                                            <p className="text-inactive">{proxyIndex + 1}.</p>
                                            {author && <p>{author}</p>}
                                            {author && proxyName && <p className="text-inactive">{'>'}</p>}
                                            {proxyName && <p className="text-secondary">{proxyName}</p>}
                                            {toMonitor.length > 0 && (
                                                <>
                                                    <p className="text-inactive">{'>'}</p>
                                                    <p className="text-default">{toMonitor}</p>
                                                </>
                                            )}
                                            <div className="hidden grow border-b border-dashed border-light-hover text-sm group-hover:border-secondary md:flex" />
                                        </LinkWrapper>
                                        <div className="flex gap-2">
                                            {socials.map((social, socialIndex) => (
                                                <LinkWrapper
                                                    key={`${social.href}-${socialIndex}`}
                                                    target="_blank"
                                                    href={social.href}
                                                    className="cursor-alias rounded-md p-1 hover:bg-light-hover hover:text-primary"
                                                >
                                                    <IconWrapper icon={social.icon} className="size-4" />
                                                </LinkWrapper>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </PageWrapper>
    )
}
