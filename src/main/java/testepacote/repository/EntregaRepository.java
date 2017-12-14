package testepacote.repository;

import testepacote.domain.Entrega;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Entrega entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EntregaRepository extends JpaRepository<Entrega, Long> {

}
