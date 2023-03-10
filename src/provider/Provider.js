import localforage from 'localforage'
import { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const ProviderContext = createContext()

const Provider = (props) => {
  //Get currentURL and get Section/Shoe Type
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

  //Set Loading animation
  const [loading, setLoading] = useState(false)
  const handleLoading = () => {
    setLoading(!loading)
    setTimeout(() => {
      setLoading(loading)
    }, 600)
  }
  //Set image on Details and BuyNow
  const [visibleImage, setVisibleImage] = useState(1)
  const letVisible = (number) => {
    setVisibleImage(number)
  }
  const nextImage = () => {
    visibleImage === 3 ? setVisibleImage(3) : setVisibleImage(visibleImage + 1)
  }
  const previousImage = () => {
    visibleImage === 1 ? setVisibleImage(1) : setVisibleImage(visibleImage - 1)
  }
  //Function to open/close Details section
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
  }
  //Open details section according to product received
  const [productDetails, setProductDetails] = useState([])
  const OpenProductDetails = (product) => {
    setProductDetails(product)
  }

  //Function to open/close BuyNow section
  const [buyNowIsVisible, setBuyNowIsVisible] = useState(false)
  const handleBuyNowSection = (action) => {
    if (action === 'open') {
      setBuyNowIsVisible(true)
    }
    if (action === 'close') {
      setBuyNowIsVisible(false)
      setTimeout(() => {
        setVisibleImage(1)
      }, 100)
    }
  }
  //Open BuyNow section according to product received
  const [productBuyNow, setProductBuyNow] = useState([])
  const OpenProductBuyNow = (product) => {
    setProductBuyNow(product)
  }

  //Function to close Details/Buy Now section if URL changes
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false)
      setBuyNowIsVisible(false)
    }, 500)
  }, [useLocation()])

  const [chooseSize, setChooseSize] = useState(null)

  const [section, setSection] = useState(false)
  let [idButton, setIdButton] = useState(null)
  const handleSection = (e) => {
    setSection(!section)
    setIdButton((idButton = e.currentTarget.id))
  }

  let [productType, setProductType] = useState(currentSection)
  const changeProduct = (e) => {
    setTimeout(() => {
      setProductType((productType = e))
    }, 600)
  }
  let currentURL = useLocation()
  useEffect(() => {
    changeProduct(currentSection)
    handleLoading()
  }, [currentURL])

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

  //Function to add/remove products to Favourites
  const UpdateFavourites = (product, action) => {
    const itExists = favourites.find((item) =>
      item.name === product.name &&
      item.color === product.color &&
      item.size === product.size
        ? true
        : false
    )
    if (action === 'add' && !itExists) {
      setFavourites([...favourites, product])
    }
    if (action === 'remove' && itExists) {
      setFavourites(
        favourites.filter(
          (productToRemove) =>
            !(
              productToRemove.name === product.name &&
              productToRemove.color === product.color &&
              productToRemove.size === product.size
            )
        )
      )
    }
    if (action === 'toggle') {
      !itExists
        ? setFavourites([...favourites, product])
        : setFavourites(
            favourites.filter(
              (productToRemove) =>
                !(
                  productToRemove.name === product.name &&
                  productToRemove.color === product.color &&
                  productToRemove.size === product.size
                )
            )
          )
    }
  }
  useEffect(() => {
    localforage.setItem('myFavourites', favourites)
  }, [favourites])

  const [isProductInCart, setIsProductInCart] = useState(null)
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
    setSelectedProductSize(product)
  }
  useEffect(() => {
    setSelectedProductSize(null)
  }, [])

  //Function to change quantity/add/remove elements from the shopping cart
  const UpdateShoppingCart = (action, product = selectedProductSize) => {
    const itExists = shoppingCart.find((item) =>
      item.name === product.name &&
      item.color === product.color &&
      item.size === product.size
        ? true
        : false
    )
    if (action === 'add') {
      itExists
        ? setShoppingCart(
            shoppingCart.map((item) =>
              item.name === product.name &&
              item.color === product.color &&
              item.size === product.size
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          )
        : setShoppingCart([...shoppingCart, product])
    }
    if (action === 'remove' && itExists) {
      if (itExists.quantity > 1) {
        setShoppingCart(
          shoppingCart.map((item) =>
            item.name === product.name &&
            item.color === product.color &&
            item.size === product.size
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        )
      } else {
        setShoppingCart(shoppingCart.filter((item) => item !== itExists))
      }
    }
    if (action === 'removeProduct') {
      setShoppingCart(shoppingCart.filter((item) => item !== itExists))
    }
  }
  useEffect(() => {
    localforage.setItem('myShoppingCart', shoppingCart)
  }, [shoppingCart])

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
        productBuyNow,
        OpenProductBuyNow,
        letVisible,
        nextImage,
        previousImage,
        handleDetailsSection,
        buyNowIsVisible,
        handleBuyNowSection,
        productType,
        changeProduct,
        UpdateFavourites,
        favourites,
        UpdateShoppingCart,
        shoppingCart,
        ScrollTo,
        productDetails,
        OpenProductDetails,
        selectedProductSize,
        setSelectedProductSize,
        selectSize,
        chooseSize,
        setChooseSize,
        isProductInCart,
        setIsProductInCart,
        currentURL
      }}>
      {props.children}
    </ProviderContext.Provider>
  )
}

export default Provider
