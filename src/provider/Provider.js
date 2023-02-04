import localforage from 'localforage'
import { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const ProviderContext = createContext()

const Provider = (props) => {
  let currentURLLocation = document.URL.split('/').at(4)
  let currentSection = currentURLLocation
    ? currentURLLocation
        .split('_')
        .map((e) => {
          return e[0].toUpperCase() + e.slice(1)
        })
        .toString()
        .replace(',', ' ')
    : null
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const DataLoading = () => {
    setIsDataLoaded(!isDataLoaded)
  }

  const [loading, setLoading] = useState(false)
  const handleLoading = () => {
    setLoading(!loading)
    setTimeout(() => {
      setLoading(loading)
    }, 1000)
  }

  const [visibleImage, setVisibleImage] = useState(1)
  const letVisible = (number) => {
    setVisibleImage(number)
  }
  const [detailsIsVisible, setIsVisible] = useState(false)
  const handleDetailsSection = (action) => {
    if (action === 'open') {
      setIsVisible(true)
    }
    if (action === 'close') {
      setIsVisible(false)
      setTimeout(() => {
        setVisibleImage(1)
      }, 100)
    }
    // setIsVisible(!detailsIsVisible)
  }


  const [section, setSection] = useState(false)
  let [idButton, setIdButton] = useState(null)
  const handleSection = (e) => {
    setSection(!section)
    setIdButton((idButton = e.currentTarget.id))
  }

  // const [comp, setComp] = useState(null)



  let [productType, setProductType] = useState(currentSection)
  const changeProduct = (e) => {
    setTimeout(() => {
      setProductType((productType = e))
    }, 1000)
  }
  let currentURL = useLocation()
  useEffect(() => {
    changeProduct(currentSection)
    handleLoading()
  }, [currentURL])

  const [cart, setCart] = useState([])
  const AddToFavourites = (product) => {
    if (!cart.includes(product)) {
      cart.push(product)
    }
    console.log(cart)
  }

  const ScrollTo = (element) => {
    const ElementToScrollInto = document.querySelector(`#${element}`)
    setTimeout(() => {
      ElementToScrollInto.scrollIntoView()
    }, 1000)
  }

  const [favourites, setFavourites] = useState([])
  useEffect(() => {
    localforage.getItem('myFavourites').then((data) => {
      if (data) {
        setFavourites(data)
      }
    })
  }, [])

  const UpdateFavourites = (product, action) => {
    localforage.getItem('myFavourites').then((currentFavourites) => {
      if (!currentFavourites) {
        currentFavourites = []
      }
      let stringProduct = JSON.stringify(product)
      let isExists = currentFavourites.find((item) => item === stringProduct)
        ? true
        : false
      if (action === 'add') {
        isExists
          ? console.log('ya existe este elemento ')
          : setFavourites([...currentFavourites, stringProduct])
      }
      if (action === 'remove') {
        isExists
          ? setFavourites(
              currentFavourites.filter(
                (productToRemove) => productToRemove !== stringProduct
              )
            )
          : console.log('este elemento no se encuentra o ya ha sido removido')
      }
      if (action === 'toggle') {
        !isExists
          ? setFavourites([...currentFavourites, stringProduct])
          : setFavourites(
              currentFavourites.filter(
                (productToRemove) => productToRemove !== stringProduct
              )
            )
      }
      console.log('clickeado')
    })
  }
  useEffect(() => {
    localforage.setItem('myFavourites', favourites)
  }, [favourites])

  const [wasRemoved, setWasRemoved] = useState(false)
  const RemoveAnimation = () => {
    setWasRemoved(true)
    setTimeout(() => {
      setWasRemoved(false)
    }, 1000)
  }

  // Shopping Cart Section

  const [shoppingCart, setShoppingCart] = useState([])
  useEffect(() => {
    localforage.getItem('myShoppingCart').then((data) => {
      if (data) {
        setShoppingCart(data)
      }
    })
  }, [])
  const [selectedProductSize, setSelectedProductSize] = useState(null)
  const selectSize = (product) => {
    setSelectedProductSize(JSON.stringify(product))
  }
  const UpdateShoppingCart = (action, product) => {
    if (action === 'add' && !shoppingCart.includes(selectedProductSize)) {
      setShoppingCart([...shoppingCart, selectedProductSize])
    } else if (action === 'remove' && shoppingCart.includes(product)) {
      setShoppingCart(
        shoppingCart.filter((valueToRemove) => valueToRemove !== product)
      )
    }
  }
  useEffect(() => {
    localforage.setItem('myShoppingCart', shoppingCart)
  }, [shoppingCart])

  const [productDetails, setProductDetails] = useState([])
  const OpenProductDetails = (product) => {
    setProductDetails(product)
  }

  const [checkoutIsOpen, setCheckoutIsOpen] = useState(false)
  const Checkout = () => {
    setTimeout(()=>{
      setCheckoutIsOpen(true)
    })
  }

  return (
    <ProviderContext.Provider
      value={{
        loading,
        handleLoading,
        section,
        handleSection,
        idButton,
        detailsIsVisible,
        visibleImage,
        letVisible,
        handleDetailsSection,
        productType,
        changeProduct,
        AddToFavourites,
        UpdateFavourites,
        favourites,
        UpdateShoppingCart,
        shoppingCart,
        wasRemoved,
        RemoveAnimation,
        ScrollTo,
        productDetails,
        OpenProductDetails,
        selectSize,
        currentURL
      }}>
      {props.children}
    </ProviderContext.Provider>
  )
}

export default Provider
