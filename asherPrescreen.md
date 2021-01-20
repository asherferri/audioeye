Asher Multiple Choice AudioEye:

1. B <a href = 'http://audioeye.com'>
2. A <button>
3. D <a href = '#'>
4. A <button>
5. E //for binds 'pods' label to input id
    <label for = 'pods'> Do you like peas?</label>
    <input type = 'text' name = 'peas' id = 'pods'>
6. rooster dime
    console.log(obj.a.animal + " " + obj.b[index])
                rooster                 dime
7.  x.plus() // 0 + 1
    x.plus() // 1 + 1
    x.minus() // 2 - 1
    x.plus() // 1 + 1
    x.display() // value: 2
8. 27
9.  a/ Text input labeled "First Name"
    b/ Correct and Accesible Syntax
        //for binds 'first-name' label to input id
        <label for = 'first-name'> First Name </label>
        <input type = 'text' id = 'first-name' name = 'first-name'>
10. a/ on a webpage a <div class='button'> has a click event.
    b/ keyboard user cannot access click event
    c/ use JS to activate event with Space or Enter key.


<div class = 'button'>Click for free money</div>

<script>
    //grabs the element and puts it into buttons
    let buttons = document.getElementsByClassName('button')
    //assigns reactive index to array
    let accessibleButton = buttons[0]
    // tabindex property allows to run tab on divs, assigns 0 to order/
    accessibleButton.setAttribute('tabindex', 0)
    //function to handle clicks (users with mouse access)
    handleClick = () => {
      alert('here are 1000 bitcoins!!!!')
    }
    //function to handle keyboard input on div(using event.code Enter or Space)
    handleEnter = (e) => {
      if (e.code == 'Enter' || e.code == 'Space') {
        alert('here are 1000 bitcoins!!!!')
        e.preventDefault()
      }
    }
    
    //assings event listener to accesibleButton
    accessibleButton.addEventListener('click', handleClick)
    accessibleButton.addEventListener('keydown', handleEnter)
</script>