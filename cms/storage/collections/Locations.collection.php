<?php
 return array (
  'name' => 'Locations',
  'label' => 'Studios',
  '_id' => 'Locations59494a4e7c01d',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'name',
      'label' => 'Name des Küchenstudios',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => true,
    ),
    1 => 
    array (
      'name' => 'address',
      'label' => 'Adresse',
      'type' => 'wysiwyg',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => false,
      'acl' => 
      array (
      ),
      'required' => true,
    ),
    2 => 
    array (
      'name' => 'mapLat',
      'label' => 'Latitude',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-2',
      'lst' => false,
      'acl' => 
      array (
      ),
    ),
    3 => 
    array (
      'name' => 'mapLng',
      'label' => 'Longitude',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-2',
      'lst' => false,
      'acl' => 
      array (
      ),
    ),
    4 => 
    array (
      'name' => 'placeId',
      'label' => 'Google PlaceID (if available)',
      'type' => 'text',
      'default' => '',
      'info' => 'https://developers.google.com/places/place-id?hl=de',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => false,
      'acl' => 
      array (
      ),
    ),
  ),
  'sortable' => true,
  'in_menu' => false,
  '_created' => 1497975374,
  '_modified' => 1510144230,
  'color' => '#3C3B3D',
  'acl' => 
  array (
    'author' => 
    array (
      'entries_edit' => true,
      'entries_view' => true,
      'entries_create' => true,
      'entries_delete' => true,
    ),
  ),
  'icon' => 'buildings.svg',
);