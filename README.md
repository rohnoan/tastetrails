NOTE  :   changed the view to code for readme.md
hi im rohan sharma :)
    i am a react frontend developer
    i like to do competitive programming
    ive done over 350+ dsa questions

this is my project taste trails

features-
    filter based on category
    search function
    single page dedicated to each product
    infinite scroll
    detailed product page

time taken - 12 to 14 hours of dedicated coding

techstack - reactJS ,tailwindCSS ,JSX

how i implemented this project
    header section - a simple heading with background
    navbar - i mapped all three bars and changed the css on the basis of which ones active
    home page-
        simply displayed features using JSX syntax
    product page-
        search bar              -    used useState hook to change the value from e.target.value and then when search button is clicked i re-render the page
        filter                  -    used a bool useState hook to close and open the filter section and some css for better UI/UX
                                     wrote categories as buttons such as dairy,snacks,etc when clicked the API url is in useEffect is updated to search for them
        products                -    used useState hook to create an array and add products to it using useEffect hook 
        infinite scroll         -    whenever the end is reached i update the URL in useEffect to search for 20 more items and then add them to products array
        single product page     -    used react router to show show dedicated product page and used useParams hook to get the id from URL
        add to cart             -    used contextAPI to pass data and avoid prop drilling         
        cart                    -    made a cart array and used contextAPI and then mapped over the array



    
