package com.tcs.backend.empresa;

import lombok.*;

import javax.persistence.*;

@Entity
@Table ( name = "departamento" )
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Departamento{
    @Id
    @Column ( name = "id_departamento" )
    @GeneratedValue ( strategy = GenerationType.IDENTITY )
    private int id;
    @Column ( name = "Nombre" )
    private String nombre;
    @Column ( name = "Descripcion" )
    private String descripcion;
        @Column ( name = "Codigo" )
    private int codigo;
}
