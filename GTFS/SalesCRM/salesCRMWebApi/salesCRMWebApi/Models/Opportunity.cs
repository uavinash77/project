//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace salesCRMWebApi.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Opportunity
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Opportunity()
        {
            this.invoices = new HashSet<invoice>();
            this.orderProducts = new HashSet<orderProduct>();
        }
    
        public int id { get; set; }
        public string customerId { get; set; }
        public string employeeId { get; set; }
        public int leadId { get; set; }
        public int productId { get; set; }
        public string status { get; set; }
        public System.DateTime dateCreated { get; set; }
    
        public virtual customer customer { get; set; }
        public virtual employee employee { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<invoice> invoices { get; set; }
        public virtual lead lead { get; set; }
        public virtual product product { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<orderProduct> orderProducts { get; set; }
    }
}
