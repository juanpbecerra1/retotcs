package com.tcs.backend.empresa;

import lombok.*;

import javax.persistence.*;

@Entity
@Table ( name = "funciones" )
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Funcion {
    @Id
    @Column ( name = "id_funciones" )
    @GeneratedValue ( strategy = GenerationType.IDENTITY )
    private int id;
    @Column ( name = "descripcion" )
    private String descripcion;
    @Column ( name = "departamento" )
    private int departamento;




}
