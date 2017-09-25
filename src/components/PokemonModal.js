import React from 'react';
import { Modal, Button } from 'react-bootstrap/lib/'
import PokemonInfo from './PokemonInfo'

const PokemonModal = ({toggleModal, showModal, pokemon}) => {
  return(
    <div>
    <Modal
      show={showModal}
      onHide={toggleModal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">{pokemon !== null ? pokemon.name : 'Loading...'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {pokemon !== null ?
          <PokemonInfo pokemon={pokemon} />
        : null}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={toggleModal}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default PokemonModal
