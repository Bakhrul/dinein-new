<template>
    <div class="bg-transparent position-absolute top-0 start-0 w-100 py-3">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <NuxtImg src="/logo.png" class="nav-logo" />
                <div class="dropdown">
                    <a class="btn btn-language dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {{locale.toUpperCase() }}
                    </a>

                    <ul class="dropdown-menu dropdown-menu-language">
                        <li>
                            <NuxtLink class="dropdown-item" :to="switchLocalePath('id')">ID</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="dropdown-item" :to="switchLocalePath('en')">EN</NuxtLink>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
    <section class="sub-heading">
        <div class="container">
            <h1 class="text-center title">{{ t('home.header.title') }}</h1>
            <div class="text-center desc">{{ t('home.header.desc') }}</div>
            <div class="d-flex mt-4 justify-content-center"><a href="javascript:void(0)"
                    class="btn btn-register">{{ t('utility.getStartedForFree')}}</a></div>
        </div>
    </section>
    <section class="about-us py-5">
        <div class="container">
            <h2 class="text-center title">{{ t('home.aboutUs.title') }}</h2>
            <div class="text-center desc mb-5">{{ t('home.aboutUs.desc') }}</div>
            <div class="row justify-content-center">
                <div class="col-lg-4 mb-5 features">
                    <div class="d-flex justify-content-center">
                        <NuxtImg src="/icon-point-of-sales.png" />
                    </div>
                    <div class="sub-title">{{ t('home.aboutUs.features.pointOfSales.title') }}</div>
                    <div class="sub-desc">{{ t('home.aboutUs.features.pointOfSales.desc') }}</div>
                </div>
                <div class="col-lg-4 mb-5 features">
                    <div class="d-flex justify-content-center">
                        <NuxtImg src="/icon-self-order.png" />
                    </div>
                    <div class="sub-title">{{ t('home.aboutUs.features.selfOrder.title') }}</div>
                    <div class="sub-desc">{{ t('home.aboutUs.features.selfOrder.desc') }}</div>
                </div>
                <div class="col-lg-4 mb-5 features">
                    <div class="d-flex justify-content-center">
                        <NuxtImg src="/icon-cashless-payment.png" />
                    </div>
                    <div class="sub-title">{{ t('home.aboutUs.features.cashlessPayment.title') }}</div>
                    <div class="sub-desc">{{ t('home.aboutUs.features.cashlessPayment.desc') }}</div>
                </div>
                <div class="col-lg-4 mb-5 features">
                    <div class="d-flex justify-content-center">
                        <NuxtImg src="/icon-self-payment.png" />
                    </div>
                    <div class="sub-title">{{ t('home.aboutUs.features.selfPayment.title') }}</div>
                    <div class="sub-desc">{{ t('home.aboutUs.features.selfPayment.desc') }}</div>
                </div>
                <div class="col-lg-4 mb-5 features">
                    <div class="d-flex justify-content-center">
                        <NuxtImg src="/icon-kitchen-integration.png" />
                    </div>
                    <div class="sub-title">{{ t('home.aboutUs.features.kitchenIntegration.title') }}</div>
                    <div class="sub-desc">{{ t('home.aboutUs.features.kitchenIntegration.desc') }}</div>
                </div>
                <div class="col-lg-4 mb-5 features">
                    <div class="d-flex justify-content-center">
                        <NuxtImg src="/icon-inventory-control.png" />
                    </div>
                    <div class="sub-title">{{ t('home.aboutUs.features.inventoryControl.title') }}</div>
                    <div class="sub-desc">{{ t('home.aboutUs.features.inventoryControl.desc') }}</div>
                </div>
                <div class="col-lg-4 mb-5 features">
                    <div class="d-flex justify-content-center">
                        <NuxtImg src="/icon-reservation.png" />
                    </div>
                    <div class="sub-title">{{ t('home.aboutUs.features.reservation.title') }}</div>
                    <div class="sub-desc">{{ t('home.aboutUs.features.reservation.desc') }}</div>
                </div>
                <div class="col-lg-4 mb-5 features">
                    <div class="d-flex justify-content-center">
                        <NuxtImg src="/icon-financial-report.png" />
                    </div>
                    <div class="sub-title">{{ t('home.aboutUs.features.financialReport.title') }}</div>
                    <div class="sub-desc">{{ t('home.aboutUs.features.financialReport.desc') }}</div>
                </div>
            </div>
        </div>
    </section>
    <section class="about-us pb-5 pt-2">
        <div class="container">
            <h2 class="text-center title mb-5">{{ t('home.ourAdvantages.title') }}</h2>
            <div class="row justify-content-center">
                <div class="col-lg-4 mb-5 features">
                    <div class="d-flex justify-content-center">
                        <NuxtImg src="/icon-low-cost.png" />
                    </div>
                    <div class="sub-title">{{ t('home.ourAdvantages.features.lowCostFullManagedSubs.title') }}</div>
                    <div class="sub-desc">{{ t('home.ourAdvantages.features.lowCostFullManagedSubs.desc') }}</div>
                </div>
                <div class="col-lg-4 mb-5 features">
                    <div class="d-flex justify-content-center">
                        <NuxtImg src="/icon-customize.png" />
                    </div>
                    <div class="sub-title">{{ t('home.ourAdvantages.features.customizeWithYourOwnBrand.title') }}</div>
                    <div class="sub-desc">{{ t('home.ourAdvantages.features.customizeWithYourOwnBrand.desc') }}</div>
                </div>
                <div class="col-lg-4 mb-5 features">
                    <div class="d-flex justify-content-center">
                        <NuxtImg src="/icon-full-system.png" />
                    </div>
                    <div class="sub-title">
                        {{ t('home.ourAdvantages.features.fullSystemOwnershipWithLowInvestment.title') }}</div>
                    <div class="sub-desc">
                        {{ t('home.ourAdvantages.features.fullSystemOwnershipWithLowInvestment.desc') }}</div>
                </div>
            </div>
        </div>
    </section>
    <section class="footer py-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 my-2 title">
                    {{ t('utility.readyJoin') }}
                </div>
                <div class="col-lg-3 my-2 column-right">
                    <a href="javascript:void(0)" class="btn btn-register">{{ t('utility.getStartedForFree')}}</a>
                </div>
            </div>
        </div>
    </section>
    <section class="footer-copy py-3 fs-5">
        <div class="container text-center">© 2025 DineIn. All rights reserved.</div>
    </section>
    <a href="https://wa.me/6281260012700" class="cs-floating">
        <div class="box">{{ t('utility.cs')}}</div>
        <NuxtImg src="/icon-whatsapp.png" />
    </a>
</template>
<script setup lang="ts">
    import Logo from "~/public/logo.png"
    const {
        t
    } = useI18n()

    const {
        locale
    } = useI18n()

    const switchLocalePath = useSwitchLocalePath();

    useHead({
        title: 'DineIn - F&B Automation',
        meta: [{
                name: 'title',
                content: 'DineIn - F&B Automation'
            },
            {
                name: 'ogTitle',
                content: 'DineIn - F&B Automation'
            },
            {
                name: 'keywords',
                content: t('home.header.desc')
            },
            {
                name: 'description',
                content: t('home.header.desc')
            },
            {
                name: 'og:description',
                content: t('home.header.desc')
            },
            {
                name: 'og:image',
                content: Logo
            },
            {
                name: 'og:image:width',
                content: '512'
            },
            {
                name: 'og:image:height',
                content: '512'
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                name: 'twitter:site',
                content: '@nexparabola_tv'
            },
        ],
    })    

</script>