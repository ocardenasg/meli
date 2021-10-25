import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  ButtonSearch,
  Container,
  Content,
  InputSearch,
  Logo,
  Search,
} from './style'

export default function Header() {
  const router = useRouter()

  const handleSearch = event => {
    event.preventDefault()
    event.stopPropagation()

    const searchTerm = event.target.elements?.search?.value.trim() || ''
    router.push(`/items?search=${encodeURIComponent(searchTerm)}`)
  }

  return (
    <Container>
      <Content>
        <Logo>
          <Link href="/">
            <a>
              <Image
                src="/icons/logo_ml_2x.png"
                alt="Mercado Libre"
                quality={100}
                width={54}
                height={40}
              />
            </a>
          </Link>
        </Logo>
        <Search onSubmit={handleSearch}>
          <InputSearch
            name="search"
            placeholder="Nunca dejes de buscar"
            defaultValue={decodeURIComponent(router.query.search || '')}
          />
          <ButtonSearch>
            <Image
              src="/icons/search_2x.png"
              alt="Buscar"
              width={18}
              height={18}
            />
          </ButtonSearch>
        </Search>
      </Content>
    </Container>
  )
}
