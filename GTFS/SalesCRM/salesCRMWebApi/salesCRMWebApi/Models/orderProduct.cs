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
    
    public partial class orderProduct
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public orderProduct()
        {
            this.invoices = new HashSet<invoice>();
        }
    
        public int id { get; set; }
        public string customerId { get; set; }
        public string employeeId { get; set; }
        public int opportunityId { get; set; }
        public int productId { get; set; }
        public double price { get; set; }
        public bool status { get; set; }
        public System.DateTime dateCreated { get; set; }
    
        public virtual customer customer { get; set; }
        public virtual employee employee { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<invoice> invoices { get; set; }
        public virtual Opportunity Opportunity { get; set; }
        public virtual product product { get; set; }
    }
}