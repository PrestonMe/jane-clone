# Jane Clone

OVERVIEW

Jane-Clone is a clone of the popular e-commerce site Jane.Com, developed to showcase my web development skills.

The live clone is hosted and can be viewed <a href="https://www.jane-clone.com">here</a>

MAIN TECHNOLOGIES

<ul>
  <li>React</li>
  <li>Redux</li>
  <li>Node</li>
  <li>PostgreSQL</li>
</ul>

## SITE STRUCTURE

Jane-Clone was built using React Components.  Redux was used for cleaner state management.  Below is a screen shot with different components outlined.

<img src="/public/img/readme/shopping_components.jpg" />

# FEATURES

## DYNAMIC CART SYSTEM

The cart will display different information and components based on multiple factors.  Factors include whether or not there are items in the cart, only 1 unique item, multiple unique items, and whether or not a user is logged in.  Users can remove items and change the quantity of items in the cart.  Users can also login or sign up for an account from this page as well. Users can place mock orders by selecting to pay by credit card and filling out the payment information.  As these are mock orders no credit card information is stored, and any 16 digit number can be used to pass data validation.  

<img src="/public/img/readme/cart.jpg" />

## MOBILE RESPONSIVE

I've designed the site so users can shop at all screen sizes.  Below are examples of the cart page at different screen widths.  

<img src="/public/img/readme/tablet_view.png" />
</br>
<img src="/public/img/readme/phone_view.png" />

## DETAILED PRODUCT PAGES

When a user selects a product from one of the shopping pages, they are brought to a detailed product page.  This page loads an extended product description, seller details, highlighted product details and includes functionality to add the item to the cart.   

<img src="/public/img/readme/product_details.jpg" />

## ACCOUNT CREATION AND MANAGEMENT

I've included the ability for a user to sign up for an account and to manage their account.  Users can sign up for an account by providing basic information or by signing up through Facebook.

<img src="/public/img/readme/account_creation.jpg" />
</br>
<img src="/public/img/readme/account_management.jpg" />

## SEARCH

I created a search bar that does a simple search based on a search term.  Below is a screen shot of what will display if you run a search for the word shoe.

<img src="/public/img/readme/search.jpg" />

## BACKEND

All product, user, and order information is stored in a Postgres database.  The backend includes end points that use over 30 queries, uses server side routing, and sets up user sessions.  

## DISCLAIMER

Jane-Clone is a non-commercial personal project meant to mimic some of features and appearance of Jane.Com.  Jane-Clone is not affiliated with Jane.Com and claims no rights or ownership of any of Jane.Com's trademarks or copyrighted works.

Jane.Com's official site can be found here: <a href='https://www.jane.com/'>Jane</a>
