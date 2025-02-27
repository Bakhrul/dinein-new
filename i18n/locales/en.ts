export default defineI18nLocale(async locale => {
    return {
      utility:{
        startFrom: 'Start From',
        cs: 'Chat Customer Service',
        getStartedForFree: 'Get Started for Free',
        readyJoin: 'Ready for Revolutionize Your Restaurant with DineIn',
      },
      home:{
        header:{
            title: 'Revolutionize Your Restaurant with DineIn',
            desc: 'Manage your entire F&B business with ease - from orders to payments and inventory, all in one powerful platform.',
            buttonText: 'Get Started for Free',
        },
        aboutUs: {
            title: 'What is DineIn?',
            desc: 'DineIn is an all-in-one solution designed for restaurants, cafes, and food businesses. It simplifies order management, enhances customer experience, and streamlines operations.',
            features:{
                pointOfSales: {
                    title: 'Point of Sale',
                    desc: 'Seamless POS system for managing orders and payments.',
                },
                selfOrder:{
                    title: 'Self-Order',
                    desc: 'Allow customers to place orders directly from their phones.'
                },
                cashlessPayment:{
                    title: 'Cashless Payment',
                    desc: 'Support multiple digital payment methods for convenience.'
                },
                selfPayment:{
                    title: 'Self-Payment',
                    desc: 'Enable guests to pay their bills instantly without hassle.',
                },
                kitchenIntegration: {
                    title: 'Kitchen Integration',
                    desc: 'Sync orders directly to the kitchen for faster service.'
                },
                inventoryControl:{
                    title: 'Inventory Control',
                    desc: 'Track stock levels and reduce waste efficiently.'
                },
                reservation:{
                    title: 'Advanced Reservation System',
                    desc: 'Enable customers to book tables in advance, optimizing your restaurant’s capacity.'
                },
                financialReport:{
                    title: 'Financial & Sales Reports',
                    desc: 'Generate real-time financial insights and sales reports for better decision-making.'
                }
            }            
        },
        ourAdvantages:{
            title: 'Our Advantages',
            features:{
                lowCostFullManagedSubs: {
                    title: 'Low-Cost Full Managed Subscription',
                    desc: 'Affordable pricing with complete support and maintenance.'
                },
                customizeWithYourOwnBrand:{
                    title: 'Customize with Your Own Brand',
                    desc: 'Personalize the system to match your business identity.'
                },
                fullSystemOwnershipWithLowInvestment:{
                    title: 'Full System Ownership with Low Investment',
                    desc: 'Own the entire system with minimal upfront cost.'
                }
            }
        }
      }
    }
  })
