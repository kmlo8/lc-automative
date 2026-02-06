import {PrismaClient, FuelType, Transmission} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Cleaning up old data
    await prisma.image.deleteMany()
    await prisma.feature.deleteMany()
    await prisma.car.deleteMany()

    console.log('🌱 Seeding database...')


    await prisma.car.create({
        data: {
            make: 'Genesis',
            model: 'G90',
            year: 2023,
            price: 88900,
            mileage: 1250,
            vin: 'KMTG90X230001',
            slug: 'genesis-g90-2023',
            transmission: Transmission.AUTOMATIC,
            fuelType: FuelType.GASOLINE,
            engine: '3.5L Twin-Turbo V6',
            colorExt: 'Vik Black',
            colorInt: 'Obsidian Black',
            isFeatured: true,
            images: {
                create: [
                    {url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2940', isMain: true},
                    {url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2944', isMain: false}
                ]
            },
            features: {
                create: [
                    {name: 'Nappa Leather Seats'},
                    {name: 'Bang & Olufsen Sound'},
                    {name: 'Remote Smart Parking'}
                ]
            }
        }
    })


    await prisma.car.create({
        data: {
            make: 'BMW',
            model: '740i',
            year: 2024,
            price: 96500,
            mileage: 500,
            vin: 'WBA740I240002',
            slug: 'bmw-740i-2024',
            transmission: Transmission.AUTOMATIC,
            fuelType: FuelType.HYBRID,
            engine: '3.0L Turbo Inline-6',
            colorExt: 'Mineral White',
            colorInt: 'Tartufo Leather',
            isFeatured: true,
            images: {
                create: [
                    {url: 'https://images.unsplash.com/photo-1555215695-3004980adade?q=80&w=2940', isMain: true}
                ]
            },
            features: {
                create: [
                    {name: 'Rear Theater Screen'},
                    {name: 'Executive Lounge Seating'}
                ]
            }
        }
    })

    console.log('✅ Seeding finished.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })