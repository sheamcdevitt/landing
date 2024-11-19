import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';

export default function Products() {
  const products = [
    {
      id: 1,
      name: '8-Pack XXL Champion Flavors x Tom Aspinall',
      price: 24.99,
      image: '/assets/products-1.webp',
    },
    {
      id: 2,
      name: '3-Pack BIG Berry',
      price: 14.99,
      image: '/assets/products-2.webp',
    },
    {
      id: 3,
      name: '3-Pack Cursed Cherry Limited Edition',
      price: 15.0,
      image: '/assets/products-3.webp',
      soldOut: true,
    },
    {
      id: 4,
      name: '5-Pack Ultimate Flavor Combo',
      price: 15.99,
      originalPrice: 18.94,
      image: '/assets/products-4.webp',
      savePercent: 16,
    },
    {
      id: 5,
      name: '3-Pack Cursed Cherry Limited Edition',
      price: 15.0,
      image: '/assets/products-5.webp',
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='space-y-2 mb-8'>
        <h1 className='text-4xl font-bold'>All Products</h1>
        <p className='text-muted-foreground'>You can have them all</p>
      </div>

      <div className='flex justify-between items-center mb-8'>
        <div className='flex-1' />
        <div className='flex items-center gap-4'>
          <Select defaultValue='featured'>
            <SelectTrigger className='w-[160px]'>
              <SelectValue placeholder='Sort by' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='featured'>Featured</SelectItem>
              <SelectItem value='price-asc'>Price: Low to High</SelectItem>
              <SelectItem value='price-desc'>Price: High to Low</SelectItem>
              <SelectItem value='newest'>Newest</SelectItem>
            </SelectContent>
          </Select>
          <span className='text-sm text-muted-foreground'>
            {products.length} products
          </span>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {products.map((product) => (
          <div key={product.id} className='group relative'>
            <div className='relative aspect-square overflow-hidden rounded-lg bg-gray-100'>
              <Image
                src={product.image}
                alt={product.name}
                className='object-cover w-full h-full rounded-lg'
                width={1200}
                height={600}
                priority
              />
              {product.soldOut && (
                <div className='absolute top-2 right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded'>
                  Sold out
                </div>
              )}
              {product.savePercent && (
                <div className='absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded'>
                  Save {product.savePercent}%
                </div>
              )}
            </div>
            <div className='mt-4 space-y-1'>
              <h3 className='text-sm font-medium'>{product.name}</h3>
              <div className='flex items-center gap-2'>
                <span className='text-sm font-bold'>
                  £{product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className='text-sm text-muted-foreground line-through'>
                    £{product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
            <Button
              className='w-full mt-4'
              disabled={product.soldOut}
              variant={product.soldOut ? 'outline' : 'default'}
            >
              {product.soldOut ? 'Sold Out' : 'Add to Cart'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
