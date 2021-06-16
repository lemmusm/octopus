import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  header {
    background: ${({ theme }) => theme.body};
    transition: all 0.25s linear;
  }

  .colorText{
    color: ${({ theme }) => theme.textContent};
  }

  .colorMenu{
    color: ${({ theme }) => theme.textContent};
  }
  .colorMenu:hover{
    color: #F3719B;
  }

  .toggleBtn{
    outline: none;
    border: none;
    cursor: pointer !important;
  }

  .toggleBtn:focus{
    outline: none;
    border: none;
  }

  .toggleBtn:active{
    outline: none;
    border: none;
  }
  
  .gradientTitle{
    text-decoration: none;
    color: var(--textNormal);
    background: -webkit-linear-gradient(to left, #f2709c, #ff9472);
    background: linear-gradient(to left, #f2709c, #ff9472);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

.linkProjects {
  border: 1px solid #F98484;
  color: #F98484;
  transition: 0.7s;
}
.linkProjects:hover {
  color: white;
  background: linear-gradient(90deg, #FE987C 0, #F98484 50%, #F2719B);
}

.linkContactFooter {
  fill: ${({ theme }) => theme.textContent};
  margin: 1rem .5rem;
  width: 1rem;
  height: 0.9rem;
}

.linkContact {
  fill: ${({ theme }) => theme.textContent};
  margin: 1rem 0;
  display: flex;
  border-radius: 7rem;
  width: 8rem;
  height: 8rem;
  justify-content: center;
  align-items: center;
  position: relative;
}

.linkContact:hover {
  fill: ${({ theme }) => theme.iconsHover};;
}

/* Arrow down */
.bounce {
  -moz-animation: bounce 3s infinite;
  -webkit-animation: bounce 3s infinite;
  animation: bounce 3s infinite;
}
@-moz-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@-webkit-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

.heart {
  animation: pulse 1s ease infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.rocket:hover {
  animation: shake 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(0, -1px, 0);
  }

  20%,
  80% {
    transform: translate3d(0, 2px, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-1px, -2px, 0);
  }

  40%,
  60% {
    transform: translate3d(1px, 2px, 0);
  }
}

.pulso:hover {
  animation: pulse 1s ease infinite;
}
  `
