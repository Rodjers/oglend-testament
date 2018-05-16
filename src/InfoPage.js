import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

const InfoPage = () => (
  <div>
    <h1>Informasjon</h1>
    <h2>Om portalen</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac elit dui. Cras vel blandit nisi, vel laoreet arcu. Aenean sapien est, molestie id bibendum vitae, fermentum ut est. Donec ac cursus ante, sit amet dictum mauris. Phasellus non dignissim ligula, sit amet fringilla ex. Vestibulum massa nulla, pellentesque ut convallis non, imperdiet id nisl. Sed nec lobortis dui. Sed sollicitudin bibendum laoreet. Sed gravida id nisl quis tempor. Pellentesque eget tristique dolor, id venenatis massa. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris in malesuada leo. In eu augue accumsan, semper diam vel, consequat eros.</p>
    <p>Vivamus dictum urna non erat pretium, et sollicitudin sapien mattis. Sed at tellus molestie, dictum purus eu, tristique massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales id tellus in volutpat. Fusce molestie viverra libero non malesuada. Aliquam nec nisi eget odio rutrum convallis eu id purus. Praesent vitae neque scelerisque sapien pretium tempor vel non nisi. Pellentesque volutpat at neque fermentum aliquam. Integer sapien neque, aliquet non sem ac, cursus consequat sem. Nam et sem commodo, sagittis enim mollis, rhoncus libero. Aenean consequat eu lorem et cursus. Vestibulum sit amet est et diam dictum porta.</p>
    <h2>Begrensninger</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et quam eu nunc semper efficitur ac ac dui. Mauris rutrum odio eget mollis lobortis. Nullam porta accumsan fringilla. Nam viverra ultricies nibh id pharetra. Morbi eget augue ac tellus iaculis pellentesque eget ac nisi. Vivamus pellentesque felis placerat interdum bibendum. Aliquam in sollicitudin nisi. Maecenas rutrum odio in eros elementum pulvinar id varius mauris. Morbi molestie faucibus nisi a laoreet. Nam et ornare quam, a consequat tellus. Ut gravida arcu leo, in ornare dolor ullamcorper vel.</p>
    <p>Praesent pretium, urna nec semper commodo, arcu massa consequat justo, sit amet placerat nisi arcu a augue. Vestibulum pretium magna non semper consectetur. Aliquam vel enim sem. Morbi tempus maximus eros, vitae pharetra tellus ullamcorper quis. Mauris ullamcorper vitae purus at cursus. Vestibulum at mattis sapien. Phasellus at varius risus. Nulla facilisi. Aliquam turpis erat, convallis vitae vehicula id, vulputate in sapien. Donec leo ex, cursus sit amet feugiat quis, tincidunt egestas metus.</p>
    <p>Duis et nibh id nulla bibendum maximus. Donec at diam varius, interdum dui ut, volutpat nulla. Nulla nec pellentesque ex. Fusce nec dignissim est. Quisque est nisi, varius quis ex et, semper auctor nibh. Etiam in lorem vehicula, sagittis turpis at, dictum magna. Pellentesque ipsum urna, eleifend quis interdum et, suscipit nec neque. Vivamus elementum lorem eu ligula iaculis posuere. Cras porttitor porttitor imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam sed augue nec dui suscipit viverra eget mattis leo. In sed rutrum eros.</p>
    <Link to="/form"><button className="btn btn-default">Til portalen</button></Link>
  </div>
);

export default InfoPage;
