package com.tcs.backend.empresa;

import lombok.*;

import javax.persistence.*;

@Entity
@Table ( name = "empleado_funcion" )
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmpleadoFuncion {
    @Id
    @Column ( name = "id_empleado_funcion" )
    @GeneratedValue ( strategy = GenerationType.IDENTITY )
    private int id;
    @Column ( name = "identificacion_empleado" )
    private String identificacionEmpleado;
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="Funcion",referencedColumnName="id_funciones")
    Funcion funcion;
}
