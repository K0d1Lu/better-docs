(function() {
  const input = document.querySelector('#search')
  const targets = [ ...document.querySelectorAll('#sidebarNav li')]
  const toggles = [ ...document.querySelectorAll('.toggle')]

  input.addEventListener('keyup', () => {
    if (!input.value.length) {
      toggles.forEach((toggle) => {
        toggle.checked = false
      })
    } else {
      toggles.forEach((toggle) => {
        toggle.checked = true
      })
    }
    
    // loop over each targets and hide the not corresponding ones
    targets.forEach(target => {
      if (!target.innerText.toLowerCase().includes(input.value.toLowerCase())) {
        target.style.display = 'none'

        /**
         * Detects an empty list
         * Remove the list and the list's title if the list is not displayed
         */
        const list = [...target.parentNode.childNodes].filter( elem => elem.style.display !== 'none')

        if (!list.length) {
          target.parentNode.style.display = 'none'

          if (target.parentNode.previousSibling !== null) {
            target.parentNode.previousSibling.style.display = 'none'
          }
        }

        /**
         * Detects empty subcategory
         * Remove the entire subcategory if no item is displayed
         */
        const subcategory = [...target.parentNode.parentNode.childNodes]
          .filter( elem => elem.style.display !== 'none')

        if (!subcategory.length) {
          target.parentNode.parentNode.parentNode.style.display = 'none'
          target.parentNode.parentNode.parentNode.previousSibling.style.display = 'none'
        }

        /**
         * Detects empty category
         * Remove the entire category if no item is displayed
         */
        const category = [...target.parentNode.parentNode.parentNode.parentNode.childNodes]
          .filter( elem => elem.tagName !== 'H2' && elem.tagName !== 'INPUT' && elem.style && elem.style.display !== 'none')

        if (!category.length) {
          target.parentNode.parentNode.parentNode.parentNode.style.display = 'none'
        }
      } else {
        target.parentNode.style.display = 'block'
        
        if (target.parentNode.previousSibling !== null) {
          target.parentNode.previousSibling.style.display = 'block'
        }

        target.parentNode.parentNode.style.display = 'block'
        target.parentNode.parentNode.parentNode.style.display = 'block'
        target.parentNode.parentNode.parentNode.parentNode.style.display = 'block'
        
        if (typeof target.parentNode.parentNode.parentNode.previousSibling.style !== 'undefined') {
          target.parentNode.parentNode.parentNode.previousSibling.style.display = 'block'
        }
        
        target.style.display = 'block'
      }
    })
  })
})()