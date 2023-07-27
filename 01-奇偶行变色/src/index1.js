import $ from 'jquery'
import './css/index.css'
import logo from './images/nodejs.png'

$('.logo').attr('src', logo);
console.log(logo);

///////////babel-loader////////////
//定义修饰器
function info(target) {
    target.info = 'Person info';
}
//定义普通类
@info
class Person { }
//打印普通类中的属性info的值
consol.log(Person.info);
////////////////////////////////////
$(function () {
    $('li:even').css('background-color', 'pink');
    $('li:odd').css('background-color', '');
})