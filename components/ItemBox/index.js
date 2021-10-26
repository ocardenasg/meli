import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Text } from '../Common'
import { Container, Img } from './style'

export default function ItemBox({
  id,
  title,
  thumbnail,
  sellerState,
  formattedPrice,
  hasFreeShipping,
}) {
  const router = useRouter()
  return (
    <Link
      href={{
        pathname: `/items/${id}`,
        query: { search: router.query.search },
      }}
    >
      <a>
        <Container>
          <Img>
            <Image
              alt={title}
              layout="fill"
              quality={100}
              src={thumbnail}
              objectFit="contain"
            />
          </Img>
          <div>
            <Text size="24" padding="1rem 0 2rem">
              {`${formattedPrice} `}
              {hasFreeShipping && (
                <Image
                  src="/icons/shipping_2x.png"
                  alt="Envió gratis"
                  width={16}
                  height={16}
                />
              )}
            </Text>

            <Text size="18">{title}</Text>
          </div>
          <div>
            <Text size="12">{sellerState}</Text>
          </div>
        </Container>
      </a>
    </Link>
  )
}
